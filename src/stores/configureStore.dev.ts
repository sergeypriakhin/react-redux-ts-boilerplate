import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../root-reducer';

const logger = createLogger();

function configureStore(initialState?: object) {
  const composeEnhancers =
    (typeof window === 'object' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  // configure middlewares
  const middlewares = [thunk, logger];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store

  return createStore(rootReducer, initialState!, enhancer);
}

if ((module as any).hot) {
  (module as any).hot.accept('../root-reducer', () => {
    store.replaceReducer(rootReducer);
  });
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
