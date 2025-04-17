import { useState } from "react";
import {
  CalculatorState,
  OperationType,
  CalculationHistory,
} from "../types/calculator.types";
import { mathOperations, formatNumber } from "../utils/mathOperations";

const initialState: CalculatorState = {
  currentValue: "0",
  previousValue: "",
  operation: null,
  memory: 0,
  history: [],
  isNewCalculation: true,
};

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  const appendDigit = (digit: string) => {
    setState((prev) => ({
      ...prev,
      currentValue: prev.isNewCalculation
        ? digit
        : prev.currentValue === "0"
        ? digit
        : prev.currentValue + digit,
      isNewCalculation: false,
    }));
  };

  const setOperation = (operation: OperationType) => {
    if (state.previousValue && !state.isNewCalculation) {
      calculateResult();
    }

    setState((prev) => ({
      ...prev,
      operation,
      previousValue: prev.currentValue,
      isNewCalculation: true,
    }));
  };

  const calculateResult = () => {
    if (!state.operation || !state.previousValue) return;

    const prev = Number(state.previousValue);
    const current = Number(state.currentValue);
    let result: number;

    try {
      if (
        ["sin", "cos", "tan", "log", "ln", "sqrt"].includes(state.operation)
      ) {
        result = mathOperations[state.operation](current, 0);
      } else {
        result = mathOperations[state.operation](prev, current);
      }

      const formattedResult = formatNumber(result);
      const newHistory: CalculationHistory = {
        expression: `${state.previousValue} ${state.operation} ${state.currentValue}`,
        result,
        timestamp: new Date(),
      };

      setState((prev) => ({
        ...prev,
        currentValue: formattedResult,
        previousValue: "",
        operation: null,
        history: [...prev.history, newHistory],
        isNewCalculation: true,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        currentValue: "Error",
        previousValue: "",
        operation: null,
        isNewCalculation: true,
      }));
    }
  };

  const clearEntry = () => {
    setState((prev) => ({
      ...prev,
      currentValue: "0",
      isNewCalculation: true,
    }));
  };

  const clearAll = () => {
    setState(initialState);
  };

  const toggleSign = () => {
    setState((prev) => ({
      ...prev,
      currentValue: prev.currentValue.startsWith("-")
        ? prev.currentValue.slice(1)
        : `-${prev.currentValue}`,
    }));
  };

  const addDecimal = () => {
    if (!state.currentValue.includes(".")) {
      setState((prev) => ({
        ...prev,
        currentValue: prev.currentValue + ".",
        isNewCalculation: false,
      }));
    }
  };

  const memoryAdd = () => {
    setState((prev) => ({
      ...prev,
      memory: prev.memory + Number(prev.currentValue),
    }));
  };

  const memorySubtract = () => {
    setState((prev) => ({
      ...prev,
      memory: prev.memory - Number(prev.currentValue),
    }));
  };

  const memoryRecall = () => {
    setState((prev) => ({
      ...prev,
      currentValue: formatNumber(state.memory),
      isNewCalculation: true,
    }));
  };

  const memoryClear = () => {
    setState((prev) => ({
      ...prev,
      memory: 0,
    }));
  };

  return {
    state,
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
  };
};
