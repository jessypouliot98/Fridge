import i18next from "i18next";
import resources from '../locales';
const SUPPORTED_LOCALES = ['en'];
const DEFAULT_LOCALE = SUPPORTED_LOCALES[0];
i18next.init({
    debug: false,
    resources,
    lng: DEFAULT_LOCALE,
    supportedLngs: SUPPORTED_LOCALES,
    fallbackLng: DEFAULT_LOCALE,
    interpolation: {
        escapeValue: false,
    },
});
export default i18next;
