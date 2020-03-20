import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from "./App";

// const element = <h1>Hello World</h1>;

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById("root"));
