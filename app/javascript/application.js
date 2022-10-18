// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
import { Provider } from "react-redux";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./Redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Greeting />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
