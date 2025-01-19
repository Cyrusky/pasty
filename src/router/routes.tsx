import { MainPage } from "@/pages/mainPage.tsx";

const paths = {
  home: "/",
};

export const routes = [
  {
    path: paths.home,
    element: <MainPage />,
  },
];
