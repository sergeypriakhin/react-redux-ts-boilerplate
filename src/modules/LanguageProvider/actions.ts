import { ActionTypes, IChangeLocaleAction, Locale } from './types';

export function localeChange(locale: Locale): IChangeLocaleAction {
  return {
    type: ActionTypes.change,
    locale,
  };
}