import { useMemo } from "react";
import { useSelector } from "react-redux";
import { downpaymentSelector } from "../../../reducers/downpaymentSlice";

export const useMonthlyByDownOutput = () => {
  const { cost, downpayment, length, rate } = useSelector(downpaymentSelector);
  const rateDecimal = useMemo(() => (rate ? rate / 100 : null), [rate]);

  const showValues = useMemo(
    () =>
      cost !== null &&
      downpayment !== null &&
      length !== null &&
      rateDecimal !== null,
    [cost, downpayment, length, rateDecimal]
  );

  const amount = useMemo(() => {
    if (cost === null || downpayment === null) return null;
    return cost - downpayment;
  }, [cost, downpayment]);

  const term = useMemo(() => {
    // Only calculate if every value is present
    if (amount === null || length === null || rateDecimal === null) return null;

    const exp = 12 * length;

    const base = 1 + rateDecimal / 12;

    return Math.pow(base, exp);
  }, [amount, length, rateDecimal]);

  /**
   * Amount paid every month
   */
  const monthlyPayment = useMemo(() => {
    if (amount === null || rateDecimal === null || term === null) return null;

    // TODO: Set to 2 decimal places
    return (amount * (rateDecimal / 12) * term) / (term - 1);

    // return `$${payment.toFixed(2)}`
  }, [amount, rateDecimal, term]);

  /**
   * Total amount paid over the lifetime of the loan
   */
  const totalPayment = useMemo(() => {
    if (monthlyPayment === null || length === null) return null;

    return monthlyPayment * length * 12;
  }, [length, monthlyPayment]);

  const monthlyDisplay = useMemo(
    () =>
      monthlyPayment === null
        ? null
        : `$${monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    [monthlyPayment]
  );

  const totalDisplay = useMemo(
    () =>
      totalPayment === null
        ? null
        : `$${totalPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    [totalPayment]
  );

  return {
    monthlyDisplay,
    showValues,
    totalDisplay,
  };
};
