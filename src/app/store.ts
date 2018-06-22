import { ITodo } from './todo';
import { TODO_ADD, TODO_TOGGLE, TODO_REMOVE, TODOS_REMOVE } from './actions';
export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
}
export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};
export function rootReducer(state, action) {
  switch (action.type) {
    case TODO_ADD:
      action.todo.id = state.todos.length + 1;
      return Object.assign({}, state, {
        todos: state.todos.concat(Object.assign({}, action.todo)),
        lastUpdate: new Date()
      });

    case TODO_TOGGLE:
      var todo = state.todos.find(t => t.id === action.id);
      var index = state.todos.indexOf(todo);
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, index),
          Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
          ...state.todos.slice(index + 1)
        ],
        lastUpdate: new Date()
      });
    case TODO_REMOVE:
      return Object.assign({}, state, {
        todos: state.todos.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      });
    case TODOS_REMOVE:
      return Object.assign({}, state, {
        todos: [],
        lastUpdate: new Date()
      });
  }
  return state;
}
