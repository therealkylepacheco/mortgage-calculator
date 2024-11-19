import { InputNumber, InputNumberProps, Tooltip } from "antd";
import styled from "styled-components";

export const InputNumberStyled = styled(InputNumber<number>)`
  width: 75%;
`;

export const InputNumberTheme = (props: InputNumberProps<number>) => (
  <Tooltip placement="topLeft" title={props.placeholder} trigger={["focus"]}>
    <InputNumberStyled inputMode="numeric" size="large" {...props} />
  </Tooltip>
);
