import React from "react";
import {
  OutputContainer,
  OutputMain,
  RateText,
  SectionContainer,
} from "./OutputPanel.styles";

export const OutputPanel = () => {
  return (
    <OutputContainer>
      <SectionContainer>
        <OutputMain>$ month</OutputMain>
        <RateText>/month</RateText>
      </SectionContainer>
      <SectionContainer>
        <OutputMain>$ total</OutputMain>
        <RateText>total cost</RateText>
      </SectionContainer>
    </OutputContainer>
  );
};
