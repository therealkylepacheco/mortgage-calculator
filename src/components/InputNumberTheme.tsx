import { InputNumber, InputNumberProps, Tooltip } from "antd";
import styled from "styled-components";

export const InputNumberStyled = styled(InputNumber)`
  width: 75%;
`;

export const InputNumberTheme = (props: InputNumberProps) => (
  <Tooltip placement="topLeft" title={props.placeholder} trigger={["focus"]}>
    <InputNumberStyled size="large" {...props} />
  </Tooltip>
);
