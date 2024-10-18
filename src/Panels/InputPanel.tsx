import React from "react";
import { InputContainer } from "./InputPanel.styles";
import { InputDollars } from "../components/InputDollars";
import { InputNumberTheme } from "../components/InputNumberTheme";

export const InputPanel = () => {
  return (
    <InputContainer>
      <InputDollars placeholder="Loan amount" />
      <InputNumberTheme placeholder="Rate" suffix="%" min={0} max={100} />
      <InputNumberTheme placeholder="Length of loan" min={0} suffix="years" />
    </InputContainer>
  );
};
