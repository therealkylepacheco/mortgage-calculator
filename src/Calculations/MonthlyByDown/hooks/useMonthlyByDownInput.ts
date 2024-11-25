import { useCallback } from "react";
import {
  downpaymentActions,
  downpaymentSelector,
} from "../../../reducers/downpaymentSlice";
import { useDispatch, useSelector } from "react-redux";

export const useMonthlyByDownInput = () => {
  const dispatch = useDispatch();

  const { cost, downpayment, length, rate } = useSelector(downpaymentSelector);

  const handleCostChange = useCallback(
    (value: number | null) => dispatch(downpaymentActions.changeCost(value)),
    [dispatch]
  );

  const handleDownpaymentChange = useCallback(
    (value: number | null) =>
      dispatch(downpaymentActions.changeDownpayment(value)),
    [dispatch]
  );

  const handleLengthChange = useCallback(
    (value: number | null) => dispatch(downpaymentActions.changeLength(value)),
    [dispatch]
  );

  const handleRateChange = useCallback(
    (value: number | null) => dispatch(downpaymentActions.changeRate(value)),
    [dispatch]
  );

  return {
    cost,
    downpayment,
    handleCostChange,
    handleDownpaymentChange,
    handleLengthChange,
    handleRateChange,
    length,
    rate,
  };
};
