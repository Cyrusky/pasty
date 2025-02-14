import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { Locales } from "@/libs/constants/configs.ts";
import zh_CN from "./locales/zh_CN.json";
import zh_TW from "./locales/zh_TW.json";
import en_US from "./locales/en_US.json";

const resources = {
  en_US: {
    trans: en_US,
  },
  zh_CN: {
    trans: zh_CN,
  },
  zh_TW: {
    trans: zh_TW,
  },
};

const i18nOptions = {
  lng: Locales.zh_CN,
  fallbackLng: Locales.zh_CN,
  debug: true,
  defaultNS: "trans",
  ns: ["trans"],
  resources,
  interpolation: {
    escapeValue: false, // React 已经对值进行了转义，不需要再次转义
  },
};

i18next.use(initReactI18next).init(i18nOptions);
