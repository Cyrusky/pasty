import "./index.scss";
import { WindowButtons } from "@/libs/components/TitleBar/components/buttons.tsx";
import { FC } from "react";
import { TitleBarTabs } from "@/libs/components/TitleBarTabs.tsx";
import { useTranslation } from "react-i18next";

export const TitleBar: FC = () => {
  const { t } = useTranslation();
  const tabs = [
    t("toolbar.all"),
    t("toolbar.rtf"),
    t("toolbar.html"),
    t("toolbar.image"),
    t("toolbar.file"),
  ];

  return (
    <div className="title-bar" data-tauri-drag-region={true}>
      <TitleBarTabs tabs={tabs} />
      <WindowButtons />
    </div>
  );
};
