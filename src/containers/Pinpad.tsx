import * as React from "react";
import * as ReactRedux from "react-redux";

import { Button } from "../components/Button";
import {
  buttonCEPressedAction,
  buttonDigitPressedAction,
  buttonDecimalPressedAction,
  buttonAddPressedAction,
  buttonSubtractPressedAction,
  buttonMultiplyPressedAction,
  buttonDividePressedAction,
  buttonEqualsPressedAction,
  Digit,
} from "../store/actions";

interface PinpadProps {
  buttonCEPressedAction?: () => void;
  buttonDigitPressedAction?: (val: Digit) => void;
  buttonDecimalPressedAction?: () => void;
  buttonAddPressedAction?: () => void;
  buttonSubtractPressedAction?: () => void;
  buttonMultiplyPressedAction?: () => void;
  buttonDividePressedAction?: () => void;
  buttonEqualsPressedAction?: () => void;
}

const Pinpad = (props: PinpadProps): JSX.Element => {
  return (
    <div id="pinpad">
      <Button id="clear" title="CE" clickHandler={props.buttonCEPressedAction} />
      <Button id="divide" title="/" clickHandler={props.buttonDividePressedAction} />
      <Button id="multiply" title="*" clickHandler={props.buttonMultiplyPressedAction} />
      <Button id="subtract" title="-" clickHandler={props.buttonSubtractPressedAction} />
      <Button id="one" title="1" clickHandler={(): void => props.buttonDigitPressedAction(1)} />
      <Button id="two" title="2" clickHandler={(): void => props.buttonDigitPressedAction(2)} />
      <Button id="three" title="3" clickHandler={(): void => props.buttonDigitPressedAction(3)} />
      <Button id="add" title="+" clickHandler={props.buttonAddPressedAction} />
      <Button id="four" title="4" clickHandler={(): void => props.buttonDigitPressedAction(4)} />
      <Button id="five" title="5" clickHandler={(): void => props.buttonDigitPressedAction(5)} />
      <Button id="six" title="6" clickHandler={(): void => props.buttonDigitPressedAction(6)} />
      <Button id="seven" title="7" clickHandler={(): void => props.buttonDigitPressedAction(7)} />
      <Button id="eight" title="8" clickHandler={(): void => props.buttonDigitPressedAction(8)} />
      <Button id="nine" title="9" clickHandler={(): void => props.buttonDigitPressedAction(9)} />
      <Button id="equals" title="=" clickHandler={props.buttonEqualsPressedAction} />
      <Button id="zero" title="0" clickHandler={(): void => props.buttonDigitPressedAction(0)} />
      <Button id="decimal" title="." clickHandler={props.buttonDecimalPressedAction} />
    </div>
  );
};

const mapDispatchToProps = {
  buttonCEPressedAction,
  buttonDecimalPressedAction,
  buttonDigitPressedAction,
  buttonAddPressedAction,
  buttonSubtractPressedAction,
  buttonMultiplyPressedAction,
  buttonDividePressedAction,
  buttonEqualsPressedAction,
};

export default ReactRedux.connect(null, mapDispatchToProps)(Pinpad);
