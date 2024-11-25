import React from "react";
import { PayoffInput } from "./PayoffInput";
import { PayoffOutput } from "./PayoffOutput";
import { CalculationContainer } from "../../components/CalculationContainer";

export const Payoff = () => {
  return (
    <CalculationContainer>
      <PayoffInput />
      <PayoffOutput />
    </CalculationContainer>
  );
};
