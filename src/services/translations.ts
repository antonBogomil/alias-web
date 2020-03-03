import translations from "../config/translations";

const defaultLang = 'ua';
const useTranslations = (lang = defaultLang) => {
    //TODO : hook
    return translations.ua
};
export default useTranslations