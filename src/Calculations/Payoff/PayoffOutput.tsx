import React from "react";
import {
  EmptyText,
  OutputMain,
  OutputPanel,
  RateText,
} from "../../components/OutputPanel";
import { usePayoffOutput } from "./hooks";

export const PayoffOutput = () => {
  const { payoffDate, showValues } = usePayoffOutput();

  return (
    <OutputPanel>
      {!showValues && <EmptyText>Enter loan information</EmptyText>}
      {showValues && (
        <>
          <OutputMain>{payoffDate}</OutputMain>
          <RateText>payoff date</RateText>
        </>
      )}
    </OutputPanel>
  );
};
