import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { payoffActions, payoffSelector } from "../../../reducers/payoffSlice";

export const usePayoffInput = () => {
  const dispatch = useDispatch();

  const { monthlyPayment, principal, rate } = useSelector(payoffSelector);

  const handleMonthlyPaymentChange = useCallback(
    (value: number | null) =>
      dispatch(payoffActions.changeMonthlyPayment(value)),
    [dispatch]
  );

  const handlePrincipalChange = useCallback(
    (value: number | null) => dispatch(payoffActions.changePrincipal(value)),
    [dispatch]
  );

  const handleRateChange = useCallback(
    (value: number | null) => dispatch(payoffActions.changeRate(value)),
    [dispatch]
  );

  return {
    handleMonthlyPaymentChange,
    handlePrincipalChange,
    handleRateChange,
    monthlyPayment,
    principal,
    rate,
  };
};
