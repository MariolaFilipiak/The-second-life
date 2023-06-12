import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Provider } from "react-redux";
import store from "./common/store";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="The-second-life">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  root
);

