export type Locale = string;

export enum ActionTypes {
  change = 'CHANGE_LOCALE',
};

export interface IChangeLocaleAction {
  type: typeof ActionTypes.change;
  locale: Locale;
};

export type LanguageActions = IChangeLocaleAction;

export interface ILanguageState {
  locale: Locale;
  locales: string[];
};