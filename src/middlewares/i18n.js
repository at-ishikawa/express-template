// @flow
import i18n from 'i18n';

i18n.configure({
    "locales": ["en"],
    "defaultLocale": "en",
    "directory": __dirname + "/../messages"
});
export default i18n.init;
