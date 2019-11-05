import * as React from "react";

import { Display } from "./Display";
import { Pinpad } from "./Pinpad";

export const Calculator = () => {
  return (
    <div id="calculator" className="mx-auto mt-auto mb-auto p-2 border border-secondary rounded bg-dark">
      <Display displayText="0" />
      <Pinpad />
    </div>
  );
};
