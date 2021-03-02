import React from "react";
import ReactDOM from "react-dom";
// Components imports
import App from "./App";
import {BrowserRouter as Router, Switch} from 'react-router-dom'
// CSS imports
import "./css/index.css";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
    
  document.getElementById("root")
);