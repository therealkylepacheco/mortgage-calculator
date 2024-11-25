import React from "react";
import { CustomSelect, HeaderContainer, Title } from "./Header.styles";
import { useHeader } from "./useHeader";
import { Mode } from "../../types";

export const Header = () => {
  const { handleChangeMode, isMobileView, mode, showSelect } = useHeader();

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
          value={mode}
          variant="borderless"
          onChange={handleChangeMode}
          options={[
            {
              label: "Down payment",
              value: Mode.MonthlyByDown,
            },
            {
              label: "Loan amount",
              value: Mode.MonthlyPayment,
            },
            {
              label: "Payoff",
              value: Mode.Payoff,
            },
          ]}
        />
      )}
    </HeaderContainer>
  );
};
