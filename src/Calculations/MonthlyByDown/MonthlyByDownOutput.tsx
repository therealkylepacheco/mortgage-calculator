import React from "react";
import {
  EmptyText,
  OutputMain,
  OutputPanel,
  RateText,
} from "../../components/OutputPanel";
import { useMonthlyByDownOutput } from "./hooks";

export const MonthlyByDownOutput = () => {
  const { monthlyDisplay, showValues, totalDisplay } = useMonthlyByDownOutput();

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
