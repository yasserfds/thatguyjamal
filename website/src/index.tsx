import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WebCore from "./core/WebCore";
import reportWebVitals from "./test/reportWebVitals";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* HashRouter covers the whole app */}
    <HashRouter>
      {/* Importing the core */}
      <WebCore />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
