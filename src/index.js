import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    {/* <Redirect from={["/characters", "/locations", "/episodes"]} push /> */}
    <Redirect push to="/" />
    <App />
  </Router>,
  document.getElementById("root")
);
