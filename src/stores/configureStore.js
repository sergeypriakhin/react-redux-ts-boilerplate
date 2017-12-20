import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import rootReducer from "../reducers/index";

const logger = createLogger();
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const router = routerMiddleware(history);

const createStoreWithMiddleware = applyMiddleware(thunk, logger, router)(
  createStore
);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(
    combineReducers({
      ...rootReducer,
      router: routerReducer
    }),
    initialState,
    window.devToolsExtension && window.devToolsExtension()
  );
}
