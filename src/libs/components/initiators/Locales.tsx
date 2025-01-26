import { observer } from "mobx-react";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Locales = observer(() => {
  const settingStore = useStore(StoreNames.Setting);
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(settingStore.locale).then(() => {});
  }, [settingStore.locale]);
  return <></>;
});
