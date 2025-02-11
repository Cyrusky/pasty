import { getCurrentWindow } from "@tauri-apps/api/window";
import { isWebDev } from "@/libs/utils/env.ts";

export const minimize = () => {
  if (!isWebDev) {
    getCurrentWindow().minimize();
  }
};
export const maximize = () => {
  if (!isWebDev) {
    getCurrentWindow().maximize();
  }
};
export const close = () => {
  if (!isWebDev) {
    getCurrentWindow().close();
  }
};
