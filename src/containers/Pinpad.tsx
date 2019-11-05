import * as React from "react";
import * as ReactRedux from "react-redux";

import { Button } from "../components/Button";
import { buttonCEPressedAction, buttonDigitPressedAction, buttonDecimalPressedAction, Digit } from "../store/actions";

interface PinpadProps {
  buttonCEPressedAction?: () => void;
  buttonDigitPressedAction?: (val: Digit) => void;
  buttonDecimalPressedAction?: () => void;
}

const Pinpad = (props: PinpadProps) => {
  return (
    <div id="pinpad">
      <Button id="clear" title="CE" clickHandler={props.buttonCEPressedAction} />
      <Button id="divide" title="/" />
      <Button id="multiply" title="*" />
      <Button id="subtract" title="-" />
      <Button id="one" title="1" clickHandler={() => props.buttonDigitPressedAction(1)} />
      <Button id="two" title="2" clickHandler={() => props.buttonDigitPressedAction(2)} />
      <Button id="three" title="3" clickHandler={() => props.buttonDigitPressedAction(3)} />
      <Button id="add" title="+" />
      <Button id="four" title="4" clickHandler={() => props.buttonDigitPressedAction(4)} />
      <Button id="five" title="5" clickHandler={() => props.buttonDigitPressedAction(5)} />
      <Button id="six" title="6" clickHandler={() => props.buttonDigitPressedAction(6)} />
      <Button id="seven" title="7" clickHandler={() => props.buttonDigitPressedAction(7)} />
      <Button id="eight" title="8" clickHandler={() => props.buttonDigitPressedAction(8)} />
      <Button id="nine" title="9" clickHandler={() => props.buttonDigitPressedAction(9)} />
      <Button id="equals" title="=" />
      <Button id="zero" title="0" clickHandler={() => props.buttonDigitPressedAction(0)} />
      <Button id="decimal" title="." clickHandler={props.buttonDecimalPressedAction} />
    </div>
  );
};

const mapDispatchToProps = {
  buttonCEPressedAction,
  buttonDecimalPressedAction,
  buttonDigitPressedAction,
};

export default ReactRedux.connect(null, mapDispatchToProps)(Pinpad);
