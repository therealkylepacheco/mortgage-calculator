import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { paymentSlice, paymentSliceKey } from "./paymentSlice";
import { modeSlice, modeSliceKey } from "./modeSlice";
import { downPaymentSlice, downpaymentSliceKey } from "./downpaymentSlice";
import { payoffSliceKey, payoffSlice } from "./payoffSlice";

export const store = configureStore({
  reducer: combineReducers({
    [downpaymentSliceKey]: downPaymentSlice.reducer,
    [modeSliceKey]: modeSlice.reducer,
    [paymentSliceKey]: paymentSlice.reducer,
    [payoffSliceKey]: payoffSlice.reducer,
  }),
});
