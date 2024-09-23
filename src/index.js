import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// Bootstrap.
import "bootstrap/dist/css/bootstrap.min.css";
// Simple, global styles.
import "./index.css";
import App from "./components/App";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

// Application entry point.
render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
