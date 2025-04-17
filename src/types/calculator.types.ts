export type OperationType =
  | "add"
  | "subtract"
  | "multiply"
  | "divide"
  | "power"
  | "sqrt"
  | "sin"
  | "cos"
  | "tan"
  | "log"
  | "ln";

export interface CalculationHistory {
  expression: string;
  result: number;
  timestamp: Date;
}

export interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operation: OperationType | null;
  memory: number;
  history: CalculationHistory[];
  isNewCalculation: boolean;
}

export interface CalculatorContextType {
  state: CalculatorState;
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
