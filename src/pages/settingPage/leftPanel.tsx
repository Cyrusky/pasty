import { observer } from "mobx-react";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import clsx from "clsx";
import { SettingMenu } from "@/libs/stores/SettingUIStore.ts";
import { useTranslation } from "react-i18next";
import { FaClipboardList } from "react-icons/fa6";
import { PiPaintBucketFill } from "react-icons/pi";
import { map } from "lodash-es";
import { PanelHeader } from "@/libs/components/PanelHeader.tsx";
import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router";
import { paths } from "@/router/routes.tsx";

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
    <div className="h-full">
      <PanelHeader>
        <div>
          <NavLink to={paths.home} viewTransition>
            <IoArrowBack className="fixed left-5 top-5" />
          </NavLink>
          <div className="text-center size:25px">{t("app.pasty_setting")}</div>
        </div>
      </PanelHeader>
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
    </div>
  );
});
