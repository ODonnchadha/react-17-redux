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

// Instantiate the store.
// It can be useful to pass initial state into the store here if you're server 
//   rendering or initializing your Redux store with data from localStorage.
// Override initialState default parameters that is set within the reducers.
const store = configureStore();

// Application entry point.
// Provide: Higher order component that provides Redux store data to child components.
render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
