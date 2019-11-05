import * as Redux from "redux";
import { CalculatorActionTypes, CalculatorAction } from "./actions";

export interface StoreState {
  displayText: string;
}

const defaultState = {
  displayText: "0",
};

const reducer = (state: StoreState = defaultState, action: CalculatorAction): StoreState => {
  switch (action.type) {
    case CalculatorActionTypes.BUTTON_CE_PRESSED:
      return { ...state, displayText: "0" };
    case CalculatorActionTypes.BUTTON_DIGIT_PRESSED:
      return state.displayText.length === 1 && state.displayText === "0"
        ? { ...state, displayText: Number(action.payload).toString() }
        : { ...state, displayText: state.displayText.concat(action.payload) };
    case CalculatorActionTypes.BUTTON_DECIMAL_PRESSED:
      return state.displayText.indexOf(".") === -1 ? { ...state, displayText: state.displayText.concat(".") } : state;
    default:
      return state;
  }
};

export const store = Redux.createStore(reducer);
