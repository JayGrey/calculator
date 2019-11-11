import * as React from "react";
import * as ReactRedux from "react-redux";

import { Button } from "../components/Button";
import {
  buttonCEPressedAction,
  buttonDecimalMouseAction,
  buttonAddMouseAction,
  buttonSubtractMouseAction,
  buttonMultiplyMouseAction,
  buttonDivideMouseAction,
  buttonEqualsMouseAction,
  buttonDigitMouseAction,
  Digit,
} from "../store/actions";
import { StoreState, ButtonsState } from "../store/store";

interface PinpadProps {
  buttonCEPressedAction?: () => void;
  buttonDigitMouseAction?: (val: Digit) => void;
  buttonDecimalMouseAction?: () => void;
  buttonAddMouseAction?: () => void;
  buttonSubtractMouseAction?: () => void;
  buttonMultiplyMouseAction?: () => void;
  buttonDivideMouseAction?: () => void;
  buttonEqualsMouseAction?: () => void;
  buttonsState: ButtonsState;
}

const Pinpad = (props: PinpadProps): JSX.Element => {
  return (
    <div id="pinpad">
      <Button id="clear" title="CE" clickHandler={props.buttonCEPressedAction} />
      <Button
        id="divide"
        pressed={props.buttonsState["divide"]}
        title="/"
        clickHandler={props.buttonDivideMouseAction}
      />
      <Button
        id="multiply"
        pressed={props.buttonsState["multiply"]}
        title="*"
        clickHandler={props.buttonMultiplyMouseAction}
      />
      <Button
        id="subtract"
        pressed={props.buttonsState["subtract"]}
        title="-"
        clickHandler={props.buttonSubtractMouseAction}
      />
      <Button
        id="one"
        title="1"
        pressed={props.buttonsState["one"]}
        clickHandler={(): void => props.buttonDigitMouseAction(1)}
      />
      <Button
        id="two"
        title="2"
        pressed={props.buttonsState["two"]}
        clickHandler={(): void => props.buttonDigitMouseAction(2)}
      />
      <Button
        id="three"
        title="3"
        pressed={props.buttonsState["three"]}
        clickHandler={(): void => props.buttonDigitMouseAction(3)}
      />

      <Button id="add" title="+" pressed={props.buttonsState["add"]} clickHandler={props.buttonAddMouseAction} />

      <Button
        id="four"
        title="4"
        pressed={props.buttonsState["four"]}
        clickHandler={(): void => props.buttonDigitMouseAction(4)}
      />
      <Button
        id="five"
        title="5"
        pressed={props.buttonsState["five"]}
        clickHandler={(): void => props.buttonDigitMouseAction(5)}
      />
      <Button
        id="six"
        title="6"
        pressed={props.buttonsState["six"]}
        clickHandler={(): void => props.buttonDigitMouseAction(6)}
      />
      <Button
        id="seven"
        title="7"
        pressed={props.buttonsState["seven"]}
        clickHandler={(): void => props.buttonDigitMouseAction(7)}
      />
      <Button
        id="eight"
        title="8"
        pressed={props.buttonsState["eight"]}
        clickHandler={(): void => props.buttonDigitMouseAction(8)}
      />
      <Button
        id="nine"
        title="9"
        pressed={props.buttonsState["nine"]}
        clickHandler={(): void => props.buttonDigitMouseAction(9)}
      />
      <Button
        id="equals"
        pressed={props.buttonsState["equals"]}
        title="="
        clickHandler={props.buttonEqualsMouseAction}
      />

      <Button
        id="zero"
        title="0"
        pressed={props.buttonsState["zero"]}
        clickHandler={(): void => props.buttonDigitMouseAction(0)}
      />

      <Button
        id="decimal"
        title="."
        pressed={props.buttonsState["decimal"]}
        clickHandler={props.buttonDecimalMouseAction}
      />
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  buttonsState: state.buttonsState,
});

const mapDispatchToProps = {
  buttonCEPressedAction,
  buttonDecimalMouseAction,
  buttonAddMouseAction,
  buttonSubtractMouseAction,
  buttonMultiplyMouseAction,
  buttonDivideMouseAction,
  buttonEqualsMouseAction,
  buttonDigitMouseAction,
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Pinpad);
