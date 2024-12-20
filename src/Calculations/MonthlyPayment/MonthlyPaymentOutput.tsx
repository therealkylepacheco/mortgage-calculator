import React from "react";
import {
  EmptyText,
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
      {!showValues && <EmptyText>Enter loan information</EmptyText>}
      {showValues && (
        <>
          <OutputMain>{monthlyDisplay}</OutputMain>
          <RateText>/month</RateText>
        </>
      )}
      {showValues && (
        <>
          <OutputMain>{totalDisplay}</OutputMain>
          <RateText>total cost</RateText>
        </>
      )}
    </OutputPanel>
  );
};
