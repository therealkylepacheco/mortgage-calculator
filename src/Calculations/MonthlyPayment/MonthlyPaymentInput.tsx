import React from "react";
import { InputDollars } from "../../components/InputDollars";
import { InputNumberTheme } from "../../components/InputNumberTheme";
import { InputPanel } from "../../components/InputPanel";
import { useMonthlyPaymentInput } from "./hooks";

export const MonthlyPaymentInput = () => {
  const {
    amount,
    handleAmountChange,
    handleLengthChange,
    handleRateChange,
    length,
    rate,
  } = useMonthlyPaymentInput();

  return (
    <InputPanel>
      <InputDollars
        onChange={handleAmountChange}
        placeholder="Loan amount"
        value={amount}
      />
      <InputNumberTheme
        max={100}
        min={0}
        onChange={handleRateChange}
        placeholder="Rate"
        suffix="%"
        value={rate}
      />
      <InputNumberTheme
        min={0}
        onChange={handleLengthChange}
        placeholder="Length of loan"
        suffix="years"
        value={length}
      />
    </InputPanel>
  );
};
