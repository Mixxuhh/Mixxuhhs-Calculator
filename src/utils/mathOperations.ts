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

export const mathOperations = {
  add: (a: number, b: number): number => a + b,
  subtract: (a: number, b: number): number => a - b,
  multiply: (a: number, b: number): number => a * b,
  divide: (a: number, b: number): number => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  },
  power: (a: number, b: number): number => Math.pow(a, b),
  sqrt: (a: number, _?: number): number => {
    if (a < 0) throw new Error("Invalid input for square root");
    return Math.sqrt(a);
  },
  sin: (a: number, _?: number): number => Math.sin(a),
  cos: (a: number, _?: number): number => Math.cos(a),
  tan: (a: number, _?: number): number => Math.tan(a),
  log: (a: number, _?: number): number => {
    if (a <= 0) throw new Error("Invalid input for logarithm");
    return Math.log10(a);
  },
  ln: (a: number, _?: number): number => {
    if (a <= 0) throw new Error("Invalid input for natural logarithm");
    return Math.log(a);
  },
};

export const formatNumber = (num: number): string => {
  const precision = 10;
  const result = Number(num.toPrecision(precision));
  return result.toString();
};

export const isValidNumber = (value: string): boolean => {
  return !isNaN(Number(value)) && isFinite(Number(value));
};
