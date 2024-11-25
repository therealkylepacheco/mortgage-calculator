import React from "react";
import { InputDollars } from "../../components/InputDollars";
import { InputNumberTheme } from "../../components/InputNumberTheme";
import { InputPanel } from "../../components/InputPanel";
import { usePayoffInput } from "./hooks";

export const PayoffInput = () => {
  const {
    handleMonthlyPaymentChange,
    handlePrincipalChange,
    handleRateChange,
    monthlyPayment,
    principal,
    rate,
  } = usePayoffInput();

  return (
    <InputPanel>
      <InputDollars
        onChange={handleMonthlyPaymentChange}
        placeholder="Total monthly payment"
        value={monthlyPayment}
      />
      <InputNumberTheme
        max={100}
        min={0}
        onChange={handleRateChange}
        placeholder="Rate"
        suffix="%"
        value={rate}
      />
      <InputDollars
        onChange={handlePrincipalChange}
        placeholder="Remaining principal"
        value={principal}
      />
    </InputPanel>
  );
};
