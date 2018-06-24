import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";

// import { syncHistoryWithStore } from "react-router-redux";
import configureStore from "./stores/configureStore";

import App from "./components/App";

// Create a history of your choosing (we're using a browser history in this case)

const store = configureStore();

ReactDOM.render(
  <Provider store={store} key="provider">
    <App />
  </Provider>,
  document.getElementById("app") as HTMLElement
);
