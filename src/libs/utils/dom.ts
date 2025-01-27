import type { Themes } from "@/libs/constants/configs.ts";

export const changeTheme = (theme: Themes) => {
  const htmlTag = document.querySelector("html");
  if (htmlTag) {
    htmlTag.dataset.theme = theme;
  }
};
