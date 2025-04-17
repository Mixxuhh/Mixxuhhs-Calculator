import React from "react";
import { CalculationHistory } from "../types/calculator.types";
import "../styles/Calculator.css";

interface HistoryPanelProps {
  history: CalculationHistory[];
}

export const HistoryPanel: React.FC<HistoryPanelProps> = ({ history }) => {
  return (
    <div className="history-panel">
      <h3>History</h3>
      <div className="history-list">
        {history.map((entry, index) => (
          <div key={index} className="history-item">
            <div className="history-expression">{entry.expression}</div>
            <div className="history-result">= {entry.result}</div>
            <div className="history-time">
              {entry.timestamp.toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
