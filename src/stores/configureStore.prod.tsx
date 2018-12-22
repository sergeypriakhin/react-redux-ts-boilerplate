import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../root-reducer';

function configureStore(initialState?: object) {
	return createStore(rootReducer, initialState!, applyMiddleware(thunk));
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;