// Core
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

// import { syncHistoryWithStore } from "react-router-redux";
import configureStore from "./stores/configureStore";

import routes from "./routes";
import App from "./components/App";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

const store = configureStore();

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

const renderRouter = routes.map((route, i) => (
  <RouteWithSubRoutes key={i} {...route} />
));

ReactDOM.render(
  <Provider store={store} key="provider">
    <ConnectedRouter history={history}>
      <App>{renderRouter}</App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
