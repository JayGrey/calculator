import * as Redux from "redux";

export enum CalculatorActionTypes {
  BUTTON_CE_PRESSED = "BUTTON_CE_PRESSED",
  BUTTON_DIGIT_PRESSED = "BUTTON_DIGIT_PRESSED",
  BUTTON_DIGIT_KEYDOWN = "BUTTON_DIGIT_KEYDOWN",
  BUTTON_DIGIT_KEYUP = "BUTTON_DIGIT_KEYUP",
  BUTTON_EQUALS_PRESSED = "BUTTON_EQUALS_PRESSED",
  BUTTON_EQUALS_KEYDOWN = "BUTTON_EQUALS_KEYDOWN",
  BUTTON_EQUALS_KEYUP = "BUTTON_EQUALS_KEYUP",
  BUTTON_SUBTRACT_PRESSED = "BUTTON_SUBTRACT_PRESSED",
  BUTTON_MULTIPLY_PRESSED = "BUTTON_MULTIPLY_PRESSED",
  BUTTON_DIVIDE_PRESSED = "BUTTON_DIVIDE_PRESSED",
  BUTTON_ADD_PRESSED = "BUTTON_ADD_PRESSED",
  BUTTON_DECIMAL_PRESSED = "BUTTON_DECIMAL_PRESSED",
  BUTTON_DECIMAL_KEYDOWN = "BUTTON_DECIMAL_KEYDOWN",
  BUTTON_DECIMAL_KEYUP = "BUTTON_DECIMAL_KEYUP",
}

export interface CalculatorAction extends Redux.Action<CalculatorActionTypes> {
  payload?: string;
}

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export const buttonCEPressedAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_CE_PRESSED,
});

export const buttonDigitPressedAction = (value: Digit): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_DIGIT_PRESSED,
  payload: Number(value).toString(),
});

export const buttonDigitAction = (event: KeyboardEvent, value: Digit): CalculatorAction => {
  switch (event.type) {
    case "keypress": {
      return {
        type: CalculatorActionTypes.BUTTON_DIGIT_PRESSED,
        payload: Number(value).toString(),
      };
    }
    case "keyup": {
      return {
        type: CalculatorActionTypes.BUTTON_DIGIT_KEYUP,
        payload: Number(value).toString(),
      };
    }

    case "keydown": {
      return {
        type: CalculatorActionTypes.BUTTON_DIGIT_KEYDOWN,
        payload: Number(value).toString(),
      };
    }
  }
};

export const buttonEqualsPressedAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_EQUALS_PRESSED,
});

export const buttonEqualsAction = (event: KeyboardEvent): CalculatorAction => {
  switch (event.type) {
    case "keypress": {
      return {
        type: CalculatorActionTypes.BUTTON_EQUALS_PRESSED,
      };
    }
    case "keyup": {
      return {
        type: CalculatorActionTypes.BUTTON_EQUALS_KEYUP,
      };
    }

    case "keydown": {
      return {
        type: CalculatorActionTypes.BUTTON_EQUALS_KEYDOWN,
      };
    }
  }
};

export const buttonSubtractPressedAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_SUBTRACT_PRESSED,
});

export const buttonMultiplyPressedAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_MULTIPLY_PRESSED,
});

export const buttonDividePressedAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_DIVIDE_PRESSED,
});

export const buttonAddPressedAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_ADD_PRESSED,
});

export const buttonDecimalPressedAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_DECIMAL_PRESSED,
});
