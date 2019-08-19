import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import languageProviderReducer from './modules/LanguageProvider/reducer';
import history from 'utl/history';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  language: languageProviderReducer,
})

export type AppState = ReturnType<typeof rootReducer>