import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from "react-router-config";
import LanguageProvider from 'module/LanguageProvider';
import configureStore from "./stores/configureStore";
import routes from './routes';
import { messages } from './intl';
import history from 'utl/history';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
  <Provider store={store} key="provider">
    <LanguageProvider messages={messages}>
      <ConnectedRouter history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </LanguageProvider>
  </Provider>,
  document.getElementById("app") as HTMLElement
)

if (module.hot) {
  module.hot.accept();
}