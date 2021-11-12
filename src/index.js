import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App"

// use "npm install react-router-dom@5"

// BrowserRouter --> base for application routing; declares how React Router will be used.

// add NavBar to the render method
ReactDOM.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
