// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
import Testing from "./components/Testing";

function App() {
  return (
    <div>
      <Testing />
      <Greeting />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
