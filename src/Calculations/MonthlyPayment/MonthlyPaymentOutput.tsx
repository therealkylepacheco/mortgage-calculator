import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  OutputMain,
  OutputPanel,
  RateText,
} from "../../components/OutputPanel";
import { paymentSelector } from "../../reducers/paymentSlice";

export const MonthlyPaymentOutput = () => {
  const { amount } = useSelector(paymentSelector);

  useEffect(() => console.log("kdp redux amount: ", amount), [amount]);

  return (
    <OutputPanel>
      <>
        <OutputMain>$ month</OutputMain>
        <RateText>/month</RateText>
      </>
      <>
        <OutputMain>$ total</OutputMain>
        <RateText>total cost</RateText>
      </>
    </OutputPanel>
  );
};
