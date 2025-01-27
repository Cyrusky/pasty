import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en_US from "./locales/en_US.json";
import zh_CN from "./locales/zh_CN.json";
import { Locales } from "@/libs/constants/configs.ts";
import { IOC } from "@/libs/container";
import { StoreNames } from "@/libs/constants";
import type { ConfigStore } from "@/libs/stores/ConfigStore.ts";
import { ConfigKeys } from "@/types";

const settingStore = IOC.get<ConfigStore>(StoreNames.Configs);

i18next.use(initReactI18next).init({
  lng: settingStore.getConfigByKey(ConfigKeys.AppLocal),
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
