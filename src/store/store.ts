import * as Redux from "redux";
import { CalculatorActionTypes, CalculatorAction } from "./actions";
import { evaluate, getDigitName } from "../utils";

export interface ButtonsState {
  zero: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
  four: boolean;
  five: boolean;
  six: boolean;
  seven: boolean;
  eight: boolean;
  nine: boolean;
  decimal: boolean;
}

export interface StoreState {
  displayText: string;
  elements: string[];
  buttonsState: ButtonsState;
}

const defaultState: StoreState = {
  displayText: "",
  elements: [],
  buttonsState: {
    zero: false,
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    decimal: false,
  },
};

const reducer = (state: StoreState = defaultState, action: CalculatorAction): StoreState => {
  switch (action.type) {
    case CalculatorActionTypes.BUTTON_CE_PRESSED: {
      return defaultState;
    }

    case CalculatorActionTypes.BUTTON_DIGIT_PRESSED: {
      return state.displayText.length === 1 && state.displayText === "0"
        ? { ...state, displayText: Number(action.payload).toString() }
        : { ...state, displayText: state.displayText.concat(action.payload) };
    }

    case CalculatorActionTypes.BUTTON_DIGIT_KEYDOWN: {
      return { ...state, buttonsState: { ...state.buttonsState, [getDigitName(Number(action.payload))]: true } };
    }

    case CalculatorActionTypes.BUTTON_DIGIT_KEYUP: {
      return { ...state, buttonsState: { ...state.buttonsState, [getDigitName(Number(action.payload))]: false } };
    }

    case CalculatorActionTypes.BUTTON_DECIMAL_PRESSED: {
      return state.displayText.indexOf(".") === -1 ? { ...state, displayText: state.displayText.concat(".") } : state;
    }

    case CalculatorActionTypes.BUTTON_DECIMAL_KEYDOWN: {
      return { ...state, buttonsState: { ...state.buttonsState, decimal: true } };
    }

    case CalculatorActionTypes.BUTTON_DECIMAL_KEYUP: {
      return { ...state, buttonsState: { ...state.buttonsState, decimal: false } };
    }

    case CalculatorActionTypes.BUTTON_ADD_PRESSED: {
      return state.displayText.length > 0
        ? { ...state, displayText: "", elements: [...state.elements, state.displayText, "+"] }
        : { ...state, elements: [...state.elements, "+"] };
    }

    case CalculatorActionTypes.BUTTON_SUBTRACT_PRESSED: {
      return state.displayText.length > 0
        ? { ...state, displayText: "", elements: [...state.elements, state.displayText, "-"] }
        : { ...state, elements: [...state.elements, "-"] };
    }

    case CalculatorActionTypes.BUTTON_MULTIPLY_PRESSED: {
      return state.displayText.length > 0
        ? { ...state, displayText: "", elements: [...state.elements, state.displayText, "*"] }
        : { ...state, elements: [...state.elements, "*"] };
    }

    case CalculatorActionTypes.BUTTON_DIVIDE_PRESSED: {
      return state.displayText.length > 0
        ? { ...state, displayText: "", elements: [...state.elements, state.displayText, "/"] }
        : { ...state, elements: [...state.elements, "/"] };
    }

    case CalculatorActionTypes.BUTTON_EQUALS_PRESSED: {
      return state.displayText.length > 0
        ? { ...state, displayText: evaluate([...state.elements, state.displayText]), elements: [] }
        : { ...state, displayText: evaluate([...state.elements]), elements: [] };
    }

    default:
      return state;
  }
};

export const store = Redux.createStore(
  reducer,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
