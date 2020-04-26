import { combineReducers, createStore } from "redux";
import todosReducer from "../reducers/todosReducer";
import visibilityFilterReducer from "../reducers/visibilityFilterReducer";

const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  todos: todosReducer
});

const store = createStore(rootReducer);

export default store;
