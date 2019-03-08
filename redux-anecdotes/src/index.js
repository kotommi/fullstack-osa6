import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

const render = () => {
  //console.log("state before render", store.getState());
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  //console.log("rendered with", store.getState());
};

render();
store.subscribe(render);
