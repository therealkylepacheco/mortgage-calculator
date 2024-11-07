import React from "react";
import { CustomSelect, HeaderContainer, Title } from "./Header.styles";
import { Select } from "antd";

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Mortgate Calculator</Title>
      <CustomSelect
        defaultValue="monthlyPayment"
        dropdownStyle={{
          backgroundColor: "#74aca8",
        }}
        popupMatchSelectWidth={false}
        variant="borderless"
        options={[
          {
            label: "Monthly payment",
            value: "monthlyPayment",
          },
          {
            label: "Payoff",
            value: "payoff",
          },
        ]}
      />
    </HeaderContainer>
  );
};
