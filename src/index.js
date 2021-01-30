import React from "react";
import ReactDOM from "react-dom";
// Components imports
import App from "./App";
import {BrowserRouter as Router, Switch} from 'react-router-dom'
// CSS imports
import "./css/index.css";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById("root")
);
