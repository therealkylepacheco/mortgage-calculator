import React from "react";
import { InputContainer } from "./InputPanel.styles";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const InputPanel = ({ children }: Props) => {
  return <InputContainer>{children}</InputContainer>;
};
