import { observer } from "mobx-react-lite";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ConfigKeys } from "@/types";
import dayjs from "dayjs";
import dayJs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { dayjsLocalMap, Locales } from "@/libs/constants/configs.ts";

dayJs.extend(relativeTime);

export const LocaleInitiator = observer(() => {
  const settingStore = useStore(StoreNames.Configs);
  const { i18n } = useTranslation();

  useEffect(() => {
    const local = settingStore.configs[ConfigKeys.AppLocal];
    dayjs.locale(dayjsLocalMap[local as Locales]);
  }, [settingStore.configs[ConfigKeys.AppLocal]]);

  useEffect(() => {
    const local = settingStore.configs[ConfigKeys.AppLocal];
    i18n.changeLanguage(local);
    dayjs.locale(dayjsLocalMap[local as Locales]);
  }, [settingStore.configs[ConfigKeys.AppLocal]]);

  return <></>;
});
