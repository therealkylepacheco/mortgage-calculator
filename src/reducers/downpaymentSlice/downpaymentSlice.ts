import { createSlice } from "@reduxjs/toolkit";
import { downpaymentSliceKey } from "./sliceKey";

type Action = {
  payload: number | null;
  type: string;
};

type DownpaymentSlice = {
  cost: number | null;
  downpayment: number | null;
  length: number | null;
  rate: number | null;
};

const initialState: DownpaymentSlice = {
  cost: null,
  downpayment: null,
  length: null,
  rate: null,
};

export const downPaymentSlice = createSlice({
  name: downpaymentSliceKey,
  initialState,
  reducers: {
    reset: (state) => (state = initialState),
    changeCost: (state, action: Action) => {
      state.cost = action.payload;
    },
    changeDownpayment: (state, action: Action) => {
      state.downpayment = action.payload;
    },
    changeLength: (state, action: Action) => {
      state.length = action.payload;
    },
    changeRate: (state, action: Action) => {
      state.rate = action.payload;
    },
  },
});

export const downpaymentActions = downPaymentSlice.actions;

export const downpaymentSelector = (state: {
  [downpaymentSliceKey]: DownpaymentSlice;
}) => state[downpaymentSliceKey];
