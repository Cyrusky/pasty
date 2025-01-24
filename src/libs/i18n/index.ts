import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en_US from "./locales/en_US.json";
import zh_CN from "./locales/zh_CN.json";
import { Locales } from "@/libs/constants/settings.ts";

i18next.use(initReactI18next).init({
  lng: Locales.zh_CN,
  debug: true,
  resources: {
    [Locales.en_US]: {
      translation: en_US,
    },
    [Locales.zh_CN]: {
      translation: zh_CN,
    },
  },
});
