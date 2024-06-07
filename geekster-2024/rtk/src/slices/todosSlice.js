import { createSlice } from "@reduxjs/toolkit";

// slice - reducer + actions
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;
