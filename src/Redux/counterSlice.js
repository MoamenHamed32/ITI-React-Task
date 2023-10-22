import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state) => {
      if (state.counter > 0) {
        state.counter -= 1;
      }
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
