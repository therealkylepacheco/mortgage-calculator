import { createSlice } from "@reduxjs/toolkit";
import { payoffSliceKey } from "./sliceKey";

type Action = {
  payload: number | null;
  type: string;
};

type PayoffSlice = {
  monthlyPayment: number | null;
  principal: number | null;
  rate: number | null;
};

const initialState: PayoffSlice = {
  monthlyPayment: null,
  principal: null,
  rate: null,
};

export const payoffSlice = createSlice({
  name: payoffSliceKey,
  initialState,
  reducers: {
    reset: (state) => (state = initialState),
    changeMonthlyPayment: (state, action: Action) => {
      state.monthlyPayment = action.payload;
    },
    changePrincipal: (state, action: Action) => {
      state.principal = action.payload;
    },
    changeRate: (state, action: Action) => {
      state.rate = action.payload;
    },
  },
});

export const payoffActions = payoffSlice.actions;

export const payoffSelector = (state: { [payoffSliceKey]: PayoffSlice }) =>
  state[payoffSliceKey];
