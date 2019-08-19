import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import languageProviderReducer from 'module/LanguageProvider/reducer';

export default combineReducers({
  route: routerReducer,
  language: languageProviderReducer,
});
