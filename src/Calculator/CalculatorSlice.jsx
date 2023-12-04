import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateInp1: (state, action) => {
      state.inp1 = action.payload;
    },
    updateInp2: (state, action) => {
      state.inp2 = action.payload;
    },
    Topla: (state) => {
      state.value = parseFloat(state.inp1) + parseFloat(state.inp2);
    },
    Cix: (state) => {
      state.value = state.inp1 - state.inp2;
    },
    Vurma: (state) => {
      state.value = state.inp1 * state.inp2;
    },
    Bolme: (state) => {
      state.value = state.inp1 / state.inp2;
    },
  },
});

export const { updateInp1, updateInp2, Topla, Cix, Vurma, Bolme } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
