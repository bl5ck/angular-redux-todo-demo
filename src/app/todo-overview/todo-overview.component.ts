import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { TODOS_REMOVE } from '../actions';
@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;
  constructor(private ngRedux: NgRedux<IAppState>) {}
  ngOnInit() {}
  clearTodos() {
    this.ngRedux.dispatch({ type: TODOS_REMOVE });
  }
}
