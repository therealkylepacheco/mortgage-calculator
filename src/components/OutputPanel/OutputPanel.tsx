import React from "react";
import { OutputContainer, SectionContainer } from "./OutputPanel.styles";

type Props = {
  children: React.ReactNode[];
};

export const OutputPanel = ({ children }: Props) => {
  return (
    <OutputContainer>
      {children.map((child) => (
        <SectionContainer>{child}</SectionContainer>
      ))}
    </OutputContainer>
  );
};
