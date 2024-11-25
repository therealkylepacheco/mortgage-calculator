import React from "react";
import { InputDollars } from "../../components/InputDollars";
import { InputNumberTheme } from "../../components/InputNumberTheme";
import { InputPanel } from "../../components/InputPanel";
import { useMonthlyByDownInput } from "./hooks";

export const MonthlyByDownInput = () => {
  const {
    cost,
    downpayment,
    handleCostChange,
    handleDownpaymentChange,
    handleLengthChange,
    handleRateChange,
    length,
    rate,
  } = useMonthlyByDownInput();

  return (
    <InputPanel>
      <InputDollars
        onChange={handleCostChange}
        placeholder="Home price"
        value={cost}
      />
      <InputDollars
        onChange={handleDownpaymentChange}
        placeholder="Down payment"
        value={downpayment}
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
