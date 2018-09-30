import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {uiReducer} from './modules/ui';

export default combineReducers({
	route: routerReducer,
	UI: uiReducer
});
