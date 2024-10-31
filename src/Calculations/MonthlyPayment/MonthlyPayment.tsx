import React from "react";
import { MonthlyPaymentInput } from "./MonthlyPaymentInput";
import { MonthlyPaymentOutput } from "./MonthlyPaymentOutput";
import { CalculationContainer } from "../../components/CalculationContainer";

export const MonthlyPayment = () => {
  return (
    <CalculationContainer>
      <MonthlyPaymentInput />
      <MonthlyPaymentOutput />
    </CalculationContainer>
  );
};
