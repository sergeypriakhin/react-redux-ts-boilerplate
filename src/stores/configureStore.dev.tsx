import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const logger = createLogger();

export default function configureStore() {
	const composeEnhancers =
		(typeof window === 'object' &&
			(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
		compose;

	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk, logger))
	);

	return store;
}
