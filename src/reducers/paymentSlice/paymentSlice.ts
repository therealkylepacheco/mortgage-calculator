import { createSlice } from "@reduxjs/toolkit";
import { paymentSliceKey } from "./sliceKey";

type Action = {
  payload: number | null;
  type: string;
};

type PaymentSlice = {
  amount: number | null;
  length: number | null;
  rate: number | null;
};

const initialState: PaymentSlice = {
  amount: null,
  length: null,
  rate: null,
};

export const paymentSlice = createSlice({
  name: paymentSliceKey,
  initialState,
  reducers: {
    reset: (state) => (state = initialState),
    changeAmount: (state, action: Action) => {
      state.amount = action.payload;
    },
    changeLength: (state, action: Action) => {
      state.length = action.payload;
    },
    changeRate: (state, action: Action) => {
      state.rate = action.payload;
    },
  },
});

export const paymentActions = paymentSlice.actions;

export const paymentSelector = (state: { [paymentSliceKey]: PaymentSlice }) =>
  state[paymentSliceKey];
