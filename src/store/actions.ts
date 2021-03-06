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
  BUTTON_SUBTRACT_KEYDOWN = "BUTTON_SUBTRACT_KEYDOWN",
  BUTTON_SUBTRACT_KEYUP = "BUTTON_SUBTRACT_KEYUP",
  BUTTON_MULTIPLY_PRESSED = "BUTTON_MULTIPLY_PRESSED",
  BUTTON_MULTIPLY_KEYDOWN = "BUTTON_MULTIPLY_KEYDOWN",
  BUTTON_MULTIPLY_KEYUP = "BUTTON_MULTIPLY_KEYUP",
  BUTTON_DIVIDE_PRESSED = "BUTTON_DIVIDE_PRESSED",
  BUTTON_DIVIDE_KEYDOWN = "BUTTON_DIVIDE_KEYDOWN",
  BUTTON_DIVIDE_KEYUP = "BUTTON_DIVIDE_KEYUP",
  BUTTON_ADD_PRESSED = "BUTTON_ADD_PRESSED",
  BUTTON_ADD_KEYDOWN = "BUTTON_ADD_KEYDOWN",
  BUTTON_ADD_KEYUP = "BUTTON_ADD_KEYUP",
  BUTTON_DECIMAL_PRESSED = "BUTTON_DECIMAL_PRESSED",
  BUTTON_DECIMAL_KEYDOWN = "BUTTON_DECIMAL_KEYDOWN",
  BUTTON_DECIMAL_KEYUP = "BUTTON_DECIMAL_KEYUP",
}

export interface CalculatorAction extends Redux.Action<CalculatorActionTypes> {
  payload?: string;
}

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const createKeyAction = (
  event: KeyboardEvent,
  pressedAction: CalculatorActionTypes,
  keyDownAction: CalculatorActionTypes,
  keyUpAction: CalculatorActionTypes,
): CalculatorAction => {
  switch (event.type) {
    case "keypress": {
      return {
        type: pressedAction,
      };
    }
    case "keyup": {
      return {
        type: keyUpAction,
      };
    }

    case "keydown": {
      return {
        type: keyDownAction,
      };
    }
  }
};

export const buttonCEMouseAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_CE_PRESSED,
});

export const buttonDigitMouseAction = (value: Digit): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_DIGIT_PRESSED,
  payload: Number(value).toString(),
});

export const buttonDigitKeyAction = (event: KeyboardEvent, value: Digit): CalculatorAction => {
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

export const buttonEqualsMouseAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_EQUALS_PRESSED,
});

export const buttonEqualsKeyAction = (event: KeyboardEvent): CalculatorAction =>
  createKeyAction(
    event,
    CalculatorActionTypes.BUTTON_EQUALS_PRESSED,
    CalculatorActionTypes.BUTTON_EQUALS_KEYDOWN,
    CalculatorActionTypes.BUTTON_EQUALS_KEYUP,
  );

export const buttonSubtractMouseAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_SUBTRACT_PRESSED,
});

export const buttonSubtractKeyAction = (event: KeyboardEvent): CalculatorAction =>
  createKeyAction(
    event,
    CalculatorActionTypes.BUTTON_SUBTRACT_PRESSED,
    CalculatorActionTypes.BUTTON_SUBTRACT_KEYDOWN,
    CalculatorActionTypes.BUTTON_SUBTRACT_KEYUP,
  );

export const buttonMultiplyMouseAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_MULTIPLY_PRESSED,
});

export const buttonMultiplyKeyAction = (event: KeyboardEvent): CalculatorAction =>
  createKeyAction(
    event,
    CalculatorActionTypes.BUTTON_MULTIPLY_PRESSED,
    CalculatorActionTypes.BUTTON_MULTIPLY_KEYDOWN,
    CalculatorActionTypes.BUTTON_MULTIPLY_KEYUP,
  );

export const buttonDivideMouseAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_DIVIDE_PRESSED,
});

export const buttonDivideKeyAction = (event: KeyboardEvent): CalculatorAction =>
  createKeyAction(
    event,
    CalculatorActionTypes.BUTTON_DIVIDE_PRESSED,
    CalculatorActionTypes.BUTTON_DIVIDE_KEYDOWN,
    CalculatorActionTypes.BUTTON_DIVIDE_KEYUP,
  );

export const buttonAddMouseAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_ADD_PRESSED,
});

export const buttonAddKeyAction = (event: KeyboardEvent): CalculatorAction =>
  createKeyAction(
    event,
    CalculatorActionTypes.BUTTON_ADD_PRESSED,
    CalculatorActionTypes.BUTTON_ADD_KEYDOWN,
    CalculatorActionTypes.BUTTON_ADD_KEYUP,
  );

export const buttonDecimalMouseAction = (): CalculatorAction => ({
  type: CalculatorActionTypes.BUTTON_DECIMAL_PRESSED,
});

export const buttonDecimalKeyAction = (event: KeyboardEvent): CalculatorAction =>
  createKeyAction(
    event,
    CalculatorActionTypes.BUTTON_DECIMAL_PRESSED,
    CalculatorActionTypes.BUTTON_DECIMAL_KEYDOWN,
    CalculatorActionTypes.BUTTON_DECIMAL_KEYUP,
  );
