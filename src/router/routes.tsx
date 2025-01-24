import { MainPage } from "@/pages/mainPage.tsx";
import { SettingPage } from "@/pages/settingPage";

export const paths = {
  home: "/main",
  settings: "/settings",
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
];
