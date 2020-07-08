import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./module";

const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
