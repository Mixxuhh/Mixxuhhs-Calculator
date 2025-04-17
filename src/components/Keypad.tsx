import React from "react";
import { OperationType } from "../types/calculator.types";
import "../styles/Calculator.css";

interface KeypadProps {
  appendDigit: (digit: string) => void;
  setOperation: (operation: OperationType) => void;
  calculateResult: () => void;
  clearEntry: () => void;
  clearAll: () => void;
  toggleSign: () => void;
  addDecimal: () => void;
  memoryAdd: () => void;
  memorySubtract: () => void;
  memoryRecall: () => void;
  memoryClear: () => void;
}

export const Keypad: React.FC<KeypadProps> = (props) => {
  const {
    appendDigit,
    setOperation,
    calculateResult,
    clearEntry,
    clearAll,
    toggleSign,
    addDecimal,
    memoryAdd,
    memorySubtract,
    memoryRecall,
    memoryClear,
  } = props;

  return (
    <div className="keypad">
      {/* Memory Row */}
      <button onClick={memoryClear} className="function-key">
        MC
      </button>
      <button onClick={memoryRecall} className="function-key">
        MR
      </button>
      <button onClick={memoryAdd} className="function-key">
        M+
      </button>
      <button onClick={memorySubtract} className="function-key">
        M-
      </button>

      {/* Scientific Functions Row */}
      <button onClick={() => setOperation("sin")} className="function-key">
        sin
      </button>
      <button onClick={() => setOperation("cos")} className="function-key">
        cos
      </button>
      <button onClick={() => setOperation("tan")} className="function-key">
        tan
      </button>
      <button onClick={() => setOperation("log")} className="function-key">
        log
      </button>

      {/* Additional Functions Row */}
      <button onClick={() => setOperation("ln")} className="function-key">
        ln
      </button>
      <button onClick={() => setOperation("sqrt")} className="function-key">
        √
      </button>
      <button onClick={() => setOperation("power")} className="function-key">
        x^y
      </button>
      <button onClick={clearAll} className="clear-key">
        C
      </button>
      <button onClick={clearEntry} className="clear-key">
        CE
      </button>

      {/* Main Keypad */}
      <button onClick={() => appendDigit("7")} className="number-key">
        7
      </button>
      <button onClick={() => appendDigit("8")} className="number-key">
        8
      </button>
      <button onClick={() => appendDigit("9")} className="number-key">
        9
      </button>
      <button onClick={() => setOperation("divide")} className="operator-key">
        ÷
      </button>

      <button onClick={() => appendDigit("4")} className="number-key">
        4
      </button>
      <button onClick={() => appendDigit("5")} className="number-key">
        5
      </button>
      <button onClick={() => appendDigit("6")} className="number-key">
        6
      </button>
      <button onClick={() => setOperation("multiply")} className="operator-key">
        ×
      </button>

      <button onClick={() => appendDigit("1")} className="number-key">
        1
      </button>
      <button onClick={() => appendDigit("2")} className="number-key">
        2
      </button>
      <button onClick={() => appendDigit("3")} className="number-key">
        3
      </button>
      <button onClick={() => setOperation("subtract")} className="operator-key">
        -
      </button>

      <button onClick={() => appendDigit("0")} className="number-key">
        0
      </button>
      <button onClick={addDecimal} className="number-key">
        .
      </button>
      <button onClick={toggleSign} className="number-key">
        ±
      </button>
      <button onClick={() => setOperation("add")} className="operator-key">
        +
      </button>

      {/* Equal Button */}
      <button onClick={calculateResult} className="equal-key">
        =
      </button>
    </div>
  );
};
