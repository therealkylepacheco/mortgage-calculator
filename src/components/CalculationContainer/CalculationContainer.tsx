import React from "react";
import { useMobileView } from "../../hooks";
import { Container } from "./CalculationContainer.styles";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const CalculationContainer = ({ children }: Props) => {
  const isMobileView = useMobileView();

  return <Container isMobileView={isMobileView}>{children}</Container>;
};
