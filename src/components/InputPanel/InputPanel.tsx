import React from "react";
import { InputContainer } from "./InputPanel.styles";
import { useMobileView } from "../../hooks";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const InputPanel = ({ children }: Props) => {
  const isMobileView = useMobileView();
  return (
    <InputContainer isMobileView={isMobileView}>{children}</InputContainer>
  );
};
