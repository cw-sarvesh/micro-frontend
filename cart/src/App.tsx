import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
// Importing micro frontend components
import {Header } from "home/Header"
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
