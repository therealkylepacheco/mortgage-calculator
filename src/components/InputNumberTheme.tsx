import { InputNumber, InputNumberProps } from "antd";
import styled from "styled-components";

export const InputNumberStyled = styled(InputNumber)`
  width: 75%;
`;

export const InputNumberTheme = (props: InputNumberProps) => (
  <InputNumberStyled size="large" {...props} />
);
