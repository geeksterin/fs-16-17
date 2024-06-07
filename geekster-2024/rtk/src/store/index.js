import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import todoReducer from "../slices/todosSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});

export default store;
