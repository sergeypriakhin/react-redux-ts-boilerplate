import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { AppContainer as HotContainer } from "react-hot-loader";
import store from "./stores/configureStore";
import { renderRoutes } from "react-router-config";
import routes from './routes';

const render = () => {
  ReactDOM.hydrate(
    <Provider store={store} key="provider">
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>,
    document.getElementById("app") as HTMLElement
  )
};

render();

// if (module.hot) {
//   module.hot.accept("./components/App", () => { render() });
// }
