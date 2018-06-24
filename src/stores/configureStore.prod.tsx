import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

export default function configureStore() {
  return createStore(
    combineReducers({
      ...rootReducer
    }),
    applyMiddleware(thunk)
  );
}
