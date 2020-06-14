import dictionary from "../config/dictionary";

const defaultLang = 'ua';
const useTranslations = (lang = defaultLang) => {
    //TODO : hook
    return dictionary.ua
};
export default useTranslations