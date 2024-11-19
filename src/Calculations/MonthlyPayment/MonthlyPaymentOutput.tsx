import React from "react";
import {
  OutputMain,
  OutputPanel,
  RateText,
} from "../../components/OutputPanel";
import { useMonthlyPaymentOutput } from "./hooks";

export const MonthlyPaymentOutput = () => {
  const { monthlyDisplay, showValues, totalDisplay } =
    useMonthlyPaymentOutput();

  return (
    <OutputPanel>
      {!showValues && <RateText>Enter loan information</RateText>}
      <>
        <OutputMain>{monthlyDisplay}</OutputMain>
        {showValues && <RateText>/month</RateText>}
      </>
      <>
        <OutputMain>{totalDisplay}</OutputMain>
        {showValues && <RateText>total cost</RateText>}
      </>
    </OutputPanel>
  );
};
