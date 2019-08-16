import * as React from "react";
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { createSelector } from 'reselect';

import { makeSelectLocale } from './selectors';

interface ILanguageProvider {
  locale?: 'en' | 'ru';
  children: React.ReactNode;
  messages: any;
};

type LangProviderType = React.FunctionComponent<ILanguageProvider>;

const LanguageProvider: LangProviderType = ({ locale = 'en', messages, children }: ILanguageProvider) => {
  return(
    <IntlProvider locale={locale} messages={messages[locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({ locale })
);

export default connect(mapStateToProps)(LanguageProvider);