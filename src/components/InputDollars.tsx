import { InputNumberProps } from "antd";
import React from "react";
import { InputNumberTheme } from "./InputNumberTheme";

export const InputDollars = (props: InputNumberProps<number>) => {
  return (
    <InputNumberTheme
      {...props}
      prefix="$"
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      parser={(value) => value?.replace(/\$\s?|(,*)/g, "") as unknown as number}
    />
  );
};
