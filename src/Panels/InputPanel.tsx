import React, { useCallback } from "react";
import { InputContainer } from "./InputPanel.styles";
import { InputDollars } from "../components/InputDollars";
import { InputNumberTheme } from "../components/InputNumberTheme";

export const InputPanel = () => {
  const handleLoanChange = useCallback(
    (value: number | null) => console.log("kdp loanAmount: ", value),
    []
  );

  return (
    <InputContainer>
      <InputDollars onChange={handleLoanChange} placeholder="Loan amount" />
      <InputNumberTheme placeholder="Rate" suffix="%" min={0} max={100} />
      <InputNumberTheme placeholder="Length of loan" min={0} suffix="years" />
    </InputContainer>
  );
};
