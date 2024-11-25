import { useMemo } from "react";
import { useSelector } from "react-redux";
import { payoffSelector } from "../../../reducers/payoffSlice";
import moment from "moment";

export const usePayoffOutput = () => {
  const { monthlyPayment, principal, rate } = useSelector(payoffSelector);
  const rateDecimal = useMemo(() => (rate ? rate / 100 / 12 : null), [rate]);

  const monthsRemaining = useMemo(() => {
    if (monthlyPayment === null || principal === null || rateDecimal === null)
      return null;

    const numerator = Math.log(
      monthlyPayment / (monthlyPayment - principal * rateDecimal)
    );

    const denominator = Math.log(1 + rateDecimal); // log of 1 + monthly rate

    return numerator / denominator;
  }, [monthlyPayment, principal, rateDecimal]);

  const payoffDate = useMemo(() => {
    if (monthsRemaining === null) return null;

    if (Number.isNaN(monthsRemaining)) return NaN;

    return moment(new Date())
      .add(monthsRemaining, "months")
      .format("MMMM YYYY");
  }, [monthsRemaining]);

  const showValues = useMemo(() => monthsRemaining !== null, [monthsRemaining]);

  return {
    monthsRemaining,
    payoffDate,
    showValues,
  };
};
