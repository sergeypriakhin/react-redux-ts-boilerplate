export function localeChange(locale: string) {
  return {
    type: 'CHANGE_LOCALE',
    locale,
  };
}