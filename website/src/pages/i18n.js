/*import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  ja: {
    translation: require("/locales/ja.json"),
  },
  en: {
    translation: require("/locales/en.json"),
  },
  
};

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next).init({
  //backend:{
    //loadPath: "/locales/{{lng}}/{{ns}}.json",
  //},
  
  resources,
  lng: i18n.language ? i18n.language : "ja", // set the default language
  fallbackLng: "en", // set the fallback language
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

console.log(i18n.language)
console.log("initialized!!!!!")
console.log(i18n.t("intro"));
export default i18n;
/*