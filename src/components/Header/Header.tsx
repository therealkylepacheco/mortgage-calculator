import React from "react";
import { CustomSelect, HeaderContainer, Title } from "./Header.styles";
import { useMobileView } from "../../hooks";

export const Header = () => {
  const showSelect = false;

  const isMobileView = useMobileView();

  return (
    <HeaderContainer>
      <Title isMobileView={isMobileView}>Mortgate Calculator</Title>
      {showSelect && (
        <CustomSelect
          defaultValue="monthlyPayment"
          dropdownRender={(menu) => (
            <div style={{ backgroundColor: "white" }}>{menu}</div>
          )}
          dropdownStyle={{
            backgroundColor: "#00072d",
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
      )}
    </HeaderContainer>
  );
};
