import { MainPage } from "@/pages/mainPage";
import { SettingPage } from "@/pages/settingPage";
import { Assets } from "@/pages/assets";

export const paths = {
  home: "/main",
  settings: "/settings",
  assets: "/assets",
};

export const routes = [
  {
    path: paths.home,
    element: <MainPage />,
  },
  {
    path: paths.settings,
    element: <SettingPage />,
  },
  {
    path: paths.assets,
    element: <Assets />,
  },
];
