import * as React from "react";
import * as ReactDom from "react-dom";
import * as ReactRedux from "react-redux";

import { Calculator } from "./containers/Calculator";
import { store } from "./store/store";

ReactDom.render(
  <ReactRedux.Provider store={store}>
    <Calculator />
  </ReactRedux.Provider>,
  document.getElementById("root"),
);
