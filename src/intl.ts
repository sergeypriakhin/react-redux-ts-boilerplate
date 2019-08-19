const DEFAULT_LOCALE = 'en';
const APP_LOCALES = ['en', 'ru'];

const messages: any = {};

APP_LOCALES.forEach((locale) => {
  messages[locale] = require(`./locales/${locale}.json`);
});

export {
  DEFAULT_LOCALE,
  APP_LOCALES,
  messages
}