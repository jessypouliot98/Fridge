import i18n from 'i18next';

import resources from '../locales';
import { DEFAULT_LOCALE, localeType, SUPPORTED_LOCALES } from './constants';

export const isSupportedLocale = (locale: string): locale is localeType => {
  return (SUPPORTED_LOCALES).includes(locale as localeType);
};

i18n.init({
  debug: false,
  resources,
  lng: DEFAULT_LOCALE,
  supportedLngs: SUPPORTED_LOCALES,
  fallbackLng: DEFAULT_LOCALE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
