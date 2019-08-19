import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer } from '../root-reducer';

function configureStore(initialState = {}, history: any) {
  const middlewares = [thunk, routerMiddleware(history)];
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}

export default configureStore;