import * as React from "react";

import Display from "./Display";
import Pinpad from "./Pinpad";

import { store } from "../store/store";
import {
  buttonDigitPressedAction,
  buttonEqualsPressedAction,
  buttonDecimalPressedAction,
  buttonAddPressedAction,
  buttonSubtractPressedAction,
  buttonMultiplyPressedAction,
  buttonDividePressedAction,
} from "../store/actions";

export const Calculator = (): JSX.Element => {
  const keyHandler = (event: KeyboardEvent): void => {
    switch (event.code) {
      case "Numpad0":
      case "Digit0": {
        store.dispatch(buttonDigitPressedAction(0));
        break;
      }
      case "Numpad1":
      case "Digit1": {
        store.dispatch(buttonDigitPressedAction(1));
        break;
      }
      case "Numpad2":
      case "Digit2": {
        store.dispatch(buttonDigitPressedAction(2));
        break;
      }
      case "Numpad3":
      case "Digit3": {
        store.dispatch(buttonDigitPressedAction(3));
        break;
      }
      case "Numpad4":
      case "Digit4": {
        store.dispatch(buttonDigitPressedAction(4));
        break;
      }
      case "Numpad5":
      case "Digit5": {
        store.dispatch(buttonDigitPressedAction(5));
        break;
      }
      case "Numpad6":
      case "Digit6": {
        store.dispatch(buttonDigitPressedAction(6));
        break;
      }
      case "Numpad7":
      case "Digit7": {
        store.dispatch(buttonDigitPressedAction(7));
        break;
      }
      case "Numpad8":
      case "Digit8": {
        if (event.shiftKey) {
          store.dispatch(buttonMultiplyPressedAction());
        } else {
          store.dispatch(buttonDigitPressedAction(8));
        }
        break;
      }
      case "Numpad9":
      case "Digit9": {
        store.dispatch(buttonDigitPressedAction(9));
        break;
      }
      case "Period":
      case "Comma":
      case "NumpadDecimal": {
        store.dispatch(buttonDecimalPressedAction());
        break;
      }
      // +
      case "NumpadAdd": {
        store.dispatch(buttonAddPressedAction());
        break;
      }
      case "Equal": {
        if (event.shiftKey) {
          store.dispatch(buttonAddPressedAction());
        } else {
          store.dispatch(buttonEqualsPressedAction());
        }
        break;
      }

      // -
      case "Minus":
      case "NumpadSubtract": {
        store.dispatch(buttonSubtractPressedAction());
        break;
      }

      // *
      case "NumpadMultiply": {
        store.dispatch(buttonMultiplyPressedAction());
        break;
      }
      case "Digit8": {
        if (event.shiftKey) {
          store.dispatch(buttonMultiplyPressedAction());
        }
        break;
      }

      // /
      case "Slash":
      case "NumpadDivide": {
        store.dispatch(buttonDividePressedAction());
        break;
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener("keypress", keyHandler);

    return (): void => {
      document.removeEventListener("keypress", keyHandler);
    };
  });
  return (
    <div id="calculator" className="mx-auto mt-auto mb-auto p-2 border border-secondary rounded bg-dark">
      <Display />
      <Pinpad />
    </div>
  );
};
