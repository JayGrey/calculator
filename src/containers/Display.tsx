import * as React from "react";
import * as ReactRedux from "react-redux";

import { StoreState } from "../store/store";

interface DisplayProps {
  displayText: string;
  error?: boolean;
}

const Display = (props: DisplayProps): JSX.Element => {
  const displayClasses = [
    "text-right",
    props.error ? "text-danger" : "text-light",
    "border",
    "border-primary",
    "rounded",
    "p-1",
    "mt-2",
  ];

  return (
    <p id="display" className={displayClasses.join(" ")}>
      {props.error ? "Err" : props.displayText || "0"}
    </p>
  );
};

const mapStateToProps = (state: StoreState) => ({
  displayText: state.displayText,
  error: state.error,
});

export default ReactRedux.connect(mapStateToProps, null)(Display);
