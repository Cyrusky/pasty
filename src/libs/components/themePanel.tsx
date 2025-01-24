import { Themes } from "@/libs/constants/settings.ts";
import { FC } from "react";
import camelcase from "camelcase";

interface ThemePanelProps {
  theme: Themes;
}

export const ThemePanel: FC<ThemePanelProps> = ({ theme }) => {
  return <div>{camelcase(theme)}</div>;
};
