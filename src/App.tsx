import React from "react";
import { MonthlyPayment } from "./Calculations/MonthlyPayment";
import { AppContainer } from "./components/AppContainer";
import { Header } from "./components/Header/Header";

const App = () => (
  <AppContainer>
    <Header />
    <MonthlyPayment />
  </AppContainer>
);

export default App;
