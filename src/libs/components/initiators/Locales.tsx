import { observer } from "mobx-react-lite";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ConfigKeys } from "@/types";

export const Locales = observer(() => {
  const settingStore = useStore(StoreNames.Configs);
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n
      .changeLanguage(settingStore.configs[ConfigKeys.AppLocal])
      .then(() => {});
  }, [settingStore.configs[ConfigKeys.AppLocal]]);
  return <></>;
});
