import { DEFAULT_LOCALE, APP_LOCALES } from '../../intl';

export const initialState = {
  locales: APP_LOCALES,
  locale: DEFAULT_LOCALE
};

const languageProviderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'CHANGE_LOCALE': {
      return {
        ...state,
        locale: action.locale,
      };
    }
    default: {
      return state;
    }
  }
};

export default languageProviderReducer;