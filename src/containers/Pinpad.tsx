import * as React from "react";
import * as ReactRedux from "react-redux";

import { Button } from "../components/Button";
import {
  buttonCEPressedAction,
  buttonDecimalPressedAction,
  buttonAddPressedAction,
  buttonSubtractPressedAction,
  buttonMultiplyPressedAction,
  buttonDividePressedAction,
  buttonEqualsPressedAction,
  buttonDigitPressedAction,
  Digit,
} from "../store/actions";
import { StoreState, ButtonsState } from "../store/store";

interface PinpadProps {
  buttonCEPressedAction?: () => void;
  buttonDigitPressedAction?: (val: Digit) => void;
  buttonDecimalPressedAction?: () => void;
  buttonAddPressedAction?: () => void;
  buttonSubtractPressedAction?: () => void;
  buttonMultiplyPressedAction?: () => void;
  buttonDividePressedAction?: () => void;
  buttonEqualsPressedAction?: () => void;
  buttonsState: ButtonsState;
}

const Pinpad = (props: PinpadProps): JSX.Element => {
  return (
    <div id="pinpad">
      <Button id="clear" title="CE" clickHandler={props.buttonCEPressedAction} />
      <Button id="divide" title="/" clickHandler={props.buttonDividePressedAction} />
      <Button id="multiply" title="*" clickHandler={props.buttonMultiplyPressedAction} />
      <Button id="subtract" title="-" clickHandler={props.buttonSubtractPressedAction} />
      <Button
        id="one"
        title="1"
        pressed={props.buttonsState["one"]}
        clickHandler={(): void => props.buttonDigitPressedAction(1)}
      />
      <Button
        id="two"
        title="2"
        pressed={props.buttonsState["two"]}
        clickHandler={(): void => props.buttonDigitPressedAction(2)}
      />
      <Button
        id="three"
        title="3"
        pressed={props.buttonsState["three"]}
        clickHandler={(): void => props.buttonDigitPressedAction(3)}
      />

      <Button id="add" title="+" clickHandler={props.buttonAddPressedAction} />

      <Button
        id="four"
        title="4"
        pressed={props.buttonsState["four"]}
        clickHandler={(): void => props.buttonDigitPressedAction(4)}
      />
      <Button
        id="five"
        title="5"
        pressed={props.buttonsState["five"]}
        clickHandler={(): void => props.buttonDigitPressedAction(5)}
      />
      <Button
        id="six"
        title="6"
        pressed={props.buttonsState["six"]}
        clickHandler={(): void => props.buttonDigitPressedAction(6)}
      />
      <Button
        id="seven"
        title="7"
        pressed={props.buttonsState["seven"]}
        clickHandler={(): void => props.buttonDigitPressedAction(7)}
      />
      <Button
        id="eight"
        title="8"
        pressed={props.buttonsState["eight"]}
        clickHandler={(): void => props.buttonDigitPressedAction(8)}
      />
      <Button
        id="nine"
        title="9"
        pressed={props.buttonsState["nine"]}
        clickHandler={(): void => props.buttonDigitPressedAction(9)}
      />
      <Button id="equals" title="=" clickHandler={props.buttonEqualsPressedAction} />

      <Button
        id="zero"
        title="0"
        pressed={props.buttonsState["zero"]}
        clickHandler={(): void => props.buttonDigitPressedAction(0)}
      />

      <Button
        id="decimal"
        title="."
        pressed={props.buttonsState["decimal"]}
        clickHandler={props.buttonDecimalPressedAction}
      />
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  buttonsState: state.buttonsState,
});

const mapDispatchToProps = {
  buttonCEPressedAction,
  buttonDecimalPressedAction,
  buttonAddPressedAction,
  buttonSubtractPressedAction,
  buttonMultiplyPressedAction,
  buttonDividePressedAction,
  buttonEqualsPressedAction,
  buttonDigitPressedAction,
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Pinpad);
