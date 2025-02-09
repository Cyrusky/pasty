import { getCurrentWindow } from "@tauri-apps/api/window";

export const minimize = () => {
  if (process.env.NODE_ENV !== "development-web") {
    getCurrentWindow().minimize();
  }
};
export const maximize = () => {
  if (process.env.NODE_ENV !== "development-web") {
    getCurrentWindow().maximize();
  }
};
export const close = () => {
  if (process.env.NODE_ENV !== "development-web") {
    getCurrentWindow().close();
  }
};
