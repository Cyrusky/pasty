import { getCurrentWindow } from "@tauri-apps/api/window";
import { isWebDev } from "@/libs/utils/env.ts";
import { IOC } from "@/libs/container";
import { StoreNames } from "@/libs/constants";
import { ConfigKeys } from "@/types";
import { dayjsLocalMap, Locales, Themes } from "@/libs/constants/configs.ts";
import { ConfigStore } from "@/libs/stores/ConfigStore.ts";
import dayjs from "dayjs";

export const minimize = () => {
  if (!isWebDev) {
    getCurrentWindow().minimize();
  }
};
export const maximize = () => {
  if (!isWebDev) {
    getCurrentWindow().maximize();
  }
};
export const close = () => {
  if (!isWebDev) {
    getCurrentWindow().close();
  }
};

export const switchLocale = () => {
  const configStore = IOC.get<ConfigStore>(StoreNames.Configs);
  const newLocale =
    configStore.configs[ConfigKeys.AppLocal] === Locales.en_US
      ? Locales.zh_CN
      : Locales.en_US;
  configStore.updateConfig({
    key: ConfigKeys.AppLocal,
    value: newLocale,
  });
  dayjs.locale(dayjsLocalMap[newLocale]);
};

export const randomTheme = () => {
  const configStore = IOC.get<ConfigStore>(StoreNames.Configs);
  const allThemes = Object.values(Themes);
  const random = allThemes[Math.floor(Math.random() * allThemes.length)];
  configStore.updateConfig({
    key: ConfigKeys.AppTheme,
    value: random,
  });
};
