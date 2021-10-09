import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// imrd shortcut for: import ReactDOM from 'react-dom'
import "./scss/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
