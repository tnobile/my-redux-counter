import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./features/counter/counterSlice";
import "./index.css";

/**
 * https://medium.datadriveninvestor.com/createslice-in-redux-toolkit-c5e5441b75d9
 * https://github.com/devAbhimanyu/Redux-toolkit/tree/createSlice
 */
const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);