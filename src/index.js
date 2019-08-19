import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <Redirect from={["/characters", "/locations", "/episodes"]} to="/" push />
    <App />
  </Router>,
  document.getElementById("root")
);
