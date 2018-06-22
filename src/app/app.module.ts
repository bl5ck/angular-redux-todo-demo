import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgRedux,
  NgReduxModule,
  DevToolsExtension
} from '@angular-redux/store';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, TodoOverviewComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    let enhancers = [];
    // ... add whatever other enhancers you want.

    // You probably only want to expose this tool in devMode.
    if (!environment.production && devTools.isEnabled()) {
      enhancers = [...enhancers, devTools.enhancer()];
    }
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
