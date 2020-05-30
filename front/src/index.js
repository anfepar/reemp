import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,

  document.getElementById("root")
);
