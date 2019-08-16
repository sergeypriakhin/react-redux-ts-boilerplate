import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import LanguageProvider from 'module/LanguageProvider';
import store from "./stores/configureStore";
import routes from './routes';
import { messages } from './intl';


const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
  <Provider store={store} key="provider">
    <LanguageProvider messages={messages}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </LanguageProvider>
  </Provider>,
  document.getElementById("app") as HTMLElement
)

if (module.hot) {
  module.hot.accept();
}