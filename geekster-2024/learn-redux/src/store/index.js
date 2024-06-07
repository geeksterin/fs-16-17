import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "../reducers/counter.reducer";
import todosReducer from "../reducers/todos.reducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
})
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;



// store -> object
// reducer -> function
// action -> object

// dispatch action { type: "INCREMENT" } --> all reducers --> update store