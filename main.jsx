import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import { BrowserRouter, Link } from "react-router-dom";
import "./src/font-awesome-4.7.0/css/font-awesome.css";
import "./index.css";
ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
