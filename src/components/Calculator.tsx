import React from "react";
import { Display } from "./Display";
import { Keypad } from "./Keypad";
import { HistoryPanel } from "./HistoryPanel";
import { useCalculator } from "../hooks/useCalculator";
import "../styles/Calculator.css";

export const Calculator: React.FC = () => {
  const calculator = useCalculator();
  const { state } = calculator;

  return (
    <div className="calculator-container">
      <div className="calculator-main">
        <Display
          currentValue={state.currentValue}
          previousValue={state.previousValue}
          operation={state.operation}
        />
        <Keypad {...calculator} />
      </div>
      <HistoryPanel history={state.history} />
    </div>
  );
};
