import { IOC } from "@/libs/container";
import { StoreNames } from "@/libs/constants";
import { CommandsName, ConfigKeys } from "@/types";
import { dayjsLocalMap, Locales, Themes } from "@/libs/constants/configs.ts";
import { ConfigStore } from "@/libs/stores/ConfigStore.ts";
import dayjs from "dayjs";
import { callApi } from "@/libs/apis";

export const callSetAlwaysOnTop = (enable: boolean) => {
  callApi(CommandsName.setAlwaysOnTop, { enable });
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
