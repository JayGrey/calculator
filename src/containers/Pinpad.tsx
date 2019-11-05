import * as React from "react";

import { Button } from "../components/Button";

export const Pinpad = () => {
  return (
    <div id="pinpad">
      <Button id="clear" title="CE" />
      <Button id="divide" title="/" />
      <Button id="multiply" title="*" />
      <Button id="subtract" title="-" />
      <Button id="one" title="1" />
      <Button id="two" title="2" />
      <Button id="three" title="3" />
      <Button id="add" title="+" />
      <Button id="four" title="4" />
      <Button id="five" title="5" />
      <Button id="six" title="6" />
      <Button id="seven" title="7" />
      <Button id="eight" title="8" />
      <Button id="nine" title="9" />
      <Button id="equals" title="=" />
      <Button id="zero" title="0" />
      <Button id="decimal" title="." />
    </div>
  );
};
