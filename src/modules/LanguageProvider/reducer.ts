import { DEFAULT_LOCALE, APP_LOCALES } from "../../intl";
import { ILanguageState, LanguageActions, ActionTypes } from "./types";

export const initialState: ILanguageState= {
  locales: APP_LOCALES,
  locale: DEFAULT_LOCALE
};

export function languageProviderReducer(state = initialState, action: LanguageActions): ILanguageState {
  switch (action.type) {
    case ActionTypes.change: {
      return {
        ...state,
        locale: action.locale
      };
    }
    default: {
      return state;
    }
  }
}

export default languageProviderReducer;
