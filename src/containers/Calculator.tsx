import * as React from "react";

import Display from "./Display";
import Pinpad from "./Pinpad";

import { store } from "../store/store";
import {
  buttonDigitAction,
  buttonEqualsAction,
  buttonEqualsPressedAction,
  buttonDecimalPressedAction,
  buttonAddPressedAction,
  buttonSubtractPressedAction,
  buttonMultiplyPressedAction,
  buttonDividePressedAction,
} from "../store/actions";

const processKeys = (event: KeyboardEvent): void => {
  console.log("key:", event);
  switch (event.code) {
    case "Numpad1":
    case "Digit1": {
      store.dispatch(buttonDigitAction(event, 1));
      break;
    }
    case "Numpad2":
    case "Digit2": {
      store.dispatch(buttonDigitAction(event, 2));
      break;
    }

    case "Numpad3":
    case "Digit3": {
      store.dispatch(buttonDigitAction(event, 3));
      break;
    }

    case "Numpad4":
    case "Digit4": {
      store.dispatch(buttonDigitAction(event, 4));
      break;
    }

    case "Numpad5":
    case "Digit5": {
      store.dispatch(buttonDigitAction(event, 5));
      break;
    }

    case "Numpad6":
    case "Digit6": {
      store.dispatch(buttonDigitAction(event, 6));
      break;
    }

    case "Numpad7":
    case "Digit7": {
      store.dispatch(buttonDigitAction(event, 7));
      break;
    }

    case "Numpad8":
    case "Digit8": {
      store.dispatch(buttonDigitAction(event, 8));
      break;
    }

    case "Numpad9":
    case "Digit9": {
      store.dispatch(buttonDigitAction(event, 9));
      break;
    }

    case "Numpad0":
    case "Digit0": {
      store.dispatch(buttonDigitAction(event, 0));
      break;
    }

    case "Equal": {
      store.dispatch(buttonEqualsAction(event));
      break;
    }

    // case "Period":
    // case "Comma":
    // case "NumpadDecimal": {
    //   store.dispatch(func());
    //   break;
    // }
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
    // switch (event.code) {
    //   case "Numpad0":
    //   case "Digit0": {
    //     store.dispatch(buttonDigitPressedAction(0));
    //     break;
    //   }
    //   case "Numpad1":
    //   case "Digit1": {
    //     store.dispatch(buttonDigitPressedAction(1));
    //     break;
    //   }
    //   case "Numpad2":
    //   case "Digit2": {
    //     store.dispatch(buttonDigitPressedAction(2));
    //     break;
    //   }
    //   case "Numpad3":
    //   case "Digit3": {
    //     store.dispatch(buttonDigitPressedAction(3));
    //     break;
    //   }
    //   case "Numpad4":
    //   case "Digit4": {
    //     store.dispatch(buttonDigitPressedAction(4));
    //     break;
    //   }
    //   case "Numpad5":
    //   case "Digit5": {
    //     store.dispatch(buttonDigitPressedAction(5));
    //     break;
    //   }
    //   case "Numpad6":
    //   case "Digit6": {
    //     store.dispatch(buttonDigitPressedAction(6));
    //     break;
    //   }
    //   case "Numpad7":
    //   case "Digit7": {
    //     store.dispatch(buttonDigitPressedAction(7));
    //     break;
    //   }
    //   case "Numpad8":
    //   case "Digit8": {
    //     if (event.shiftKey) {
    //       store.dispatch(buttonMultiplyPressedAction());
    //     } else {
    //       store.dispatch(buttonDigitPressedAction(8));
    //     }
    //     break;
    //   }
    //   case "Numpad9":
    //   case "Digit9": {
    //     store.dispatch(buttonDigitPressedAction(9));
    //     break;
    //   }
    //   case "Period":
    //   case "Comma":
    //   case "NumpadDecimal": {
    //     store.dispatch(buttonDecimalPressedAction());
    //     break;
    //   }
    //   // +
    //   case "NumpadAdd": {
    //     store.dispatch(buttonAddPressedAction());
    //     break;
    //   }
    //   case "Equal": {
    //     if (event.shiftKey) {
    //       store.dispatch(buttonAddPressedAction());
    //     } else {
    //       store.dispatch(buttonEqualsPressedAction());
    //     }
    //     break;
    //   }

    //   // -
    //   case "Minus":
    //   case "NumpadSubtract": {
    //     store.dispatch(buttonSubtractPressedAction());
    //     break;
    //   }

    //   // *
    //   case "NumpadMultiply": {
    //     store.dispatch(buttonMultiplyPressedAction());
    //     break;
    //   }
    //   case "Digit8": {
    //     if (event.shiftKey) {
    //       store.dispatch(buttonMultiplyPressedAction());
    //     }
    //     break;
    //   }

    //   // /
    //   case "Slash":
    //   case "NumpadDivide": {
    //     store.dispatch(buttonDividePressedAction());
    //     break;
    //   }
    // }
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
