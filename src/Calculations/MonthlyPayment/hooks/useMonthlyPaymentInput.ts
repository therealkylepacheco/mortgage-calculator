import { useCallback } from "react";
import {
  paymentActions,
  paymentSelector,
} from "../../../reducers/paymentSlice";
import { useDispatch, useSelector } from "react-redux";

export const useMonthlyPaymentInput = () => {
  const dispatch = useDispatch();

  const { amount, length, rate } = useSelector(paymentSelector);

  const handleAmountChange = useCallback(
    (value: number | null) => dispatch(paymentActions.changeAmount(value)),
    [dispatch]
  );

  const handleLengthChange = useCallback(
    (value: number | null) => dispatch(paymentActions.changeLength(value)),
    [dispatch]
  );

  const handleRateChange = useCallback(
    (value: number | null) => dispatch(paymentActions.changeRate(value)),
    [dispatch]
  );

  return {
    amount,
    handleAmountChange,
    handleLengthChange,
    handleRateChange,
    length,
    rate,
  };
};
