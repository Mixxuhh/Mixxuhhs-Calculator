import React from "react";
import { OperationType } from "../types/calculator.types";
import "../styles/Calculator.css";

interface DisplayProps {
  currentValue: string;
  previousValue: string;
  operation: OperationType | null;
}

export const Display: React.FC<DisplayProps> = ({
  currentValue,
  previousValue,
  operation,
}) => {
  return (
    <div className="display">
      <div className="previous-operation">
        {previousValue} {operation}
      </div>
      <div className="current-value">{currentValue}</div>
    </div>
  );
};
