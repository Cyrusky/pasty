import { observer } from "mobx-react";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import clsx from "clsx";
import { SettingMenu } from "@/libs/stores/SettingUIStore.ts";
import { useTranslation } from "react-i18next";
import { FaClipboardList } from "react-icons/fa6";
import { PiPaintBucketFill } from "react-icons/pi";
import { map } from "lodash-es";

export const SettingLeftPanel = observer(() => {
  const { t } = useTranslation();
  const settingUIStore = useStore(StoreNames.SettingUIStore);

  const icons = {
    [SettingMenu.Appearance]: <PiPaintBucketFill />,
    [SettingMenu.Clipboard]: <FaClipboardList />,
  };

  const isSelected = (menu: SettingMenu) => {
    return settingUIStore.activeSettingMenu === menu;
  };

  return (
    <ul className="menu h-full">
      {map(SettingMenu, (menu) => (
        <li key={menu} className="mb-2">
          <a
            onClick={() => {
              settingUIStore.switchSettingMenu(menu);
            }}
            className={clsx({
              active: isSelected(menu),
            })}
          >
            {icons[menu]}
            {t(`settings.menu.${menu}`)}
          </a>
        </li>
      ))}
    </ul>
  );
});
