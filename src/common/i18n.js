import i18n from "i18next";
import en from "translations/en.json";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: { en: { translation: en } },
    fallbackLng: "en",
  });

export default i18n;