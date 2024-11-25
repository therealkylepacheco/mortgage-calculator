import React, { useMemo } from "react";
import { MonthlyPayment } from "./Calculations/MonthlyPayment";
import { AppContainer } from "./components/AppContainer";
import { Header } from "./components/Header/Header";
import { useSelector } from "react-redux";
import { modeSelector } from "./reducers/modeSlice";
import { Mode } from "./types";
import { MonthlyByDown } from "./Calculations/MonthlyByDown";
import { Payoff } from "./Calculations/Payoff";

const App = () => {
  const { mode } = useSelector(modeSelector);

  const View = useMemo(() => {
    switch (mode) {
      case Mode.MonthlyPayment:
        return <MonthlyPayment />;
      case Mode.MonthlyByDown:
        return <MonthlyByDown />;
      case Mode.Payoff:
        return <Payoff />;
      default:
        return null;
    }
  }, [mode]);

  return (
    <AppContainer>
      <Header />
      {View}
    </AppContainer>
  );
};

export default App;
