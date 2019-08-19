import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { routerMiddleware } from 'connected-react-router';
import { rootReducer } from "../root-reducer";

const logger = createLogger();

function configureStore(initialState = {}, history: any) {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  // configure middlewares
  const middlewares = [thunk, logger, routerMiddleware(history)];
  // compose enhancers
  const enhancer = applyMiddleware(...middlewares);
  // create store
  const store = createStore(rootReducer, initialState, composeEnhancers(enhancer));

  if (module.hot) {
    module.hot.accept('../root-reducer', () => store.replaceReducer(rootReducer))
  }

  return store;
}

export default configureStore;
