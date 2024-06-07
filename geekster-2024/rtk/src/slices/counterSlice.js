import { createSlice } from "@reduxjs/toolkit";

// slice - reducer + actions
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
  },
  reducers: {
    increment: (state, action) => {
      console.log(action.payload);
      state.count = state.count + (action?.payload ?? 1);
    },
    decrement: (state, action) => {
      console.log(action);
      state.count = state.count - (action?.payload ?? 1);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;
