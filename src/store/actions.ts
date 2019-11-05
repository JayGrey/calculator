import * as Redux from "redux";

export enum CalculatorActionTypes {
  BUTTON_CE_PRESSED = "BUTTON_CE_PRESSED",
  BUTTON_DIGIT_PRESSED = "BUTTON_DIGIT_PRESSED",
  BUTTON_EQUALS_PRESSED = "BUTTON_EQUALS_PRESSED",
  BUTTON_SUBTRACT_PRESSED = "BUTTON_SUBTRACT_PRESSED",
  BUTTON_MULTIPLY_PRESSED = "BUTTON_MULTIPLY_PRESSED",
  BUTTON_DIVIDE_PRESSED = "BUTTON_DIVIDE_PRESSED",
  BUTTON_ADD_PRESSED = "BUTTON_ADD_PRESSED",
  BUTTON_DECIMAL_PRESSED = "BUTTON_DECIMAL_PRESSED",
}

export interface CalculatorAction extends Redux.Action<CalculatorActionTypes> {
    payload? : string;
}

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export const buttonCEPressedAction = () => ({
  type: CalculatorActionTypes.BUTTON_CE_PRESSED,
});

export const buttonDigitPressedAction = (value: Digit) => ({
  type: CalculatorActionTypes.BUTTON_DIGIT_PRESSED,
  payload: value,
});

export const buttonEqualsPressedAction = () => ({
  type: CalculatorActionTypes.BUTTON_EQUALS_PRESSED,
});

export const buttonSubtractPressedAction = () => ({
  type: CalculatorActionTypes.BUTTON_SUBTRACT_PRESSED,
});

export const buttonMultiplyPressedAction = () => ({
  type: CalculatorActionTypes.BUTTON_MULTIPLY_PRESSED,
});

export const buttonDividePressedAction = () => ({
  type: CalculatorActionTypes.BUTTON_DIVIDE_PRESSED,
});

export const buttonAddPressedAction = () => ({
  type: CalculatorActionTypes.BUTTON_ADD_PRESSED,
});

export const buttonDecimalPressedAction = () => ({
  type: CalculatorActionTypes.BUTTON_DECIMAL_PRESSED,
});
