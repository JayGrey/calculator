import * as React from "react";
import * as ReactRedux from "react-redux";

import { StoreState } from "../store/store";

interface DisplayProps {
  displayText: string;
}

const Display = (props: DisplayProps): JSX.Element => {
  return (
    <p id="display" className="text-right text-light border border-primary rounded p-1 mt-2">
      {props.displayText || "0"}
    </p>
  );
};

const mapStateToProps = (state: StoreState) => ({
  displayText: state.displayText,
});

export default ReactRedux.connect(mapStateToProps, null)(Display);
