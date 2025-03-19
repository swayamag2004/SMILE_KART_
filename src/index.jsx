import React from "react";
import "./common/i18n"
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import initializeAxios from "apis/axios";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
initializeAxios();
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
