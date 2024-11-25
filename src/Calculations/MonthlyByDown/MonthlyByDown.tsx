import React from "react";
import { MonthlyByDownInput } from "./MonthlyByDownInput";
import { MonthlyByDownOutput } from "./MonthlyByDownOutput";
import { CalculationContainer } from "../../components/CalculationContainer";

export const MonthlyByDown = () => {
  return (
    <CalculationContainer>
      <MonthlyByDownInput />
      <MonthlyByDownOutput />
    </CalculationContainer>
  );
};
