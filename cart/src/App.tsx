import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
// Importing micro frontend components
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    Cart App
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
