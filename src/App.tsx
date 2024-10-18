import React from "react";
import { InputPanel } from "./Panels/InputPanel";
import { OutputPanel } from "./Panels/OutputPanel";

const App = () => (
  <div style={{ display: "flex" }}>
    <InputPanel />
    <OutputPanel />
  </div>
);

export default App;
