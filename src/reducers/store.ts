import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { paymentSlice, paymentSliceKey } from "./paymentSlice";

export const store = configureStore({
  reducer: combineReducers({
    [paymentSliceKey]: paymentSlice.reducer,
  }),
});
