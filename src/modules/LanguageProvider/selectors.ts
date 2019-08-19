import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLanguage = (state: any) => state.language || initialState;

const makeSelectLocale = () => createSelector(
  selectLanguage,
  state => state.locale
);

export { selectLanguage, makeSelectLocale };