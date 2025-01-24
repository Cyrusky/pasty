import { observer } from "mobx-react";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { SettingMenu } from "@/libs/stores/SettingUIStore.ts";
import { AppearanceForm } from "@/pages/settingPage/forms/appearanceForm.tsx";
import { useTranslation } from "react-i18next";
import { PanelHeader } from "@/libs/components/PanelHeader.tsx";

export const SettingRightPanel = observer(() => {
  const settingStore = useStore(StoreNames.SettingUIStore);
  const { t } = useTranslation();

  const forms = {
    [SettingMenu.Appearance]: <AppearanceForm />,
    [SettingMenu.Clipboard]: <div>Clipboard</div>,
  };

  return (
    <div className="h-full flex flex-col">
      <PanelHeader>
        <div className="text-left size:25px">
          {t(`settings.menu.${settingStore.activeSettingMenu}`)}
        </div>
      </PanelHeader>
      {forms[settingStore.activeSettingMenu]}
    </div>
  );
});
