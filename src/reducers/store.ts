import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { paymentSlice, paymentSliceKey } from "./paymentSlice";
import { modeSlice, modeSliceKey } from "./modeSlice";
import { downPaymentSlice, downpaymentSliceKey } from "./downpaymentSlice";

export const store = configureStore({
  reducer: combineReducers({
    [downpaymentSliceKey]: downPaymentSlice.reducer,
    [modeSliceKey]: modeSlice.reducer,
    [paymentSliceKey]: paymentSlice.reducer,
  }),
});
