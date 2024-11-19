import React from "react";
import { OutputContainer, SectionContainer } from "./OutputPanel.styles";
import { useMobileView } from "../../hooks";

type Props = {
  children: React.ReactNode[];
};

export const OutputPanel = ({ children }: Props) => {
  const isMobileView = useMobileView();
  return (
    <OutputContainer isMobileView={isMobileView}>
      {children.map((child) => (
        <SectionContainer>{child}</SectionContainer>
      ))}
    </OutputContainer>
  );
};
