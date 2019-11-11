import * as React from "react";

import Display from "./Display";
import Pinpad from "./Pinpad";

import { store } from "../store/store";
import {
  buttonDigitKeyAction,
  buttonEqualsKeyAction,
  buttonSubtractKeyAction,
  buttonMultiplyKeyAction,
  buttonDivideKeyAction,
  buttonAddKeyAction,
  buttonDecimalKeyAction,
} from "../store/actions";

const processKeys = (event: KeyboardEvent): void => {
  console.log("key:", event);
  switch (event.code) {
    case "Numpad1":
    case "Digit1": {
      store.dispatch(buttonDigitKeyAction(event, 1));
      break;
    }
    case "Numpad2":
    case "Digit2": {
      store.dispatch(buttonDigitKeyAction(event, 2));
      break;
    }

    case "Numpad3":
    case "Digit3": {
      store.dispatch(buttonDigitKeyAction(event, 3));
      break;
    }

    case "Numpad4":
    case "Digit4": {
      store.dispatch(buttonDigitKeyAction(event, 4));
      break;
    }

    case "Numpad5":
    case "Digit5": {
      store.dispatch(buttonDigitKeyAction(event, 5));
      break;
    }

    case "Numpad6":
    case "Digit6": {
      store.dispatch(buttonDigitKeyAction(event, 6));
      break;
    }

    case "Numpad7":
    case "Digit7": {
      store.dispatch(buttonDigitKeyAction(event, 7));
      break;
    }

    case "Numpad8":
    case "Digit8": {
      store.dispatch(buttonDigitKeyAction(event, 8));
      break;
    }

    case "Numpad9":
    case "Digit9": {
      store.dispatch(buttonDigitKeyAction(event, 9));
      break;
    }

    case "Numpad0":
    case "Digit0": {
      store.dispatch(buttonDigitKeyAction(event, 0));
      break;
    }

    // -
    case "Minus":
    case "NumpadSubtract": {
      store.dispatch(buttonSubtractKeyAction(event));
      break;
    }

    // *
    case "NumpadMultiply": {
      store.dispatch(buttonMultiplyKeyAction(event));
      break;
    }
    case "Digit8": {
      if (event.shiftKey) {
        store.dispatch(buttonMultiplyKeyAction(event));
      }
      break;
    }

    // /
    case "Slash":
    case "NumpadDivide": {
      store.dispatch(buttonDivideKeyAction(event));
      break;
    }

    // +
    case "NumpadAdd": {
      store.dispatch(buttonAddKeyAction(event));
      break;
    }

    case "NumpadEnter":
    case "Enter": {
      store.dispatch(buttonEqualsKeyAction(event));
      break;
    }

    case "Equal": {
      if (event.shiftKey) {
        store.dispatch(buttonAddKeyAction(event));
      } else {
        store.dispatch(buttonEqualsKeyAction(event));
      }
      break;
    }

    case "Period":
    case "Comma":
    case "NumpadDecimal": {
      store.dispatch(buttonDecimalKeyAction(event));
      break;
    }
  }
};

export const Calculator = (): JSX.Element => {
  const keyDownHandler = (event: KeyboardEvent): void => {
    processKeys(event);
  };

  const keyUpHandler = (event: KeyboardEvent): void => {
    processKeys(event);
  };

  const keyPressHandler = (event: KeyboardEvent): void => {
    processKeys(event);
  };

  React.useEffect(() => {
    document.addEventListener("keypress", keyPressHandler);

    return (): void => {
      document.removeEventListener("keypress", keyPressHandler);
    };
  });

  React.useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return (): void => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  React.useEffect(() => {
    document.addEventListener("keyup", keyUpHandler);
    return (): void => {
      document.removeEventListener("keyup", keyUpHandler);
    };
  });

  return (
    <div id="calculator" className="mx-auto mt-auto mb-auto p-2 border border-secondary rounded bg-dark">
      <Display />
      <Pinpad />
    </div>
  );
};
