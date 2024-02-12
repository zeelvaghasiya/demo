import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    showCount: (state) => {
      state.value = state.value;
    },
    incrementCount: (state) => {
        state.value = state.value + 1
    },
    decrementCount: (state) => {
        if(state.value > 0)
        {
            state.value = state.value - 1
        }
    },
  },
});

export const { showCount, incrementCount, decrementCount } = countSlice.actions;
export default countSlice.reducer;
