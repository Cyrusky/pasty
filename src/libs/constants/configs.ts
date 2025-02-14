import { ConfigKeys } from "@/types";

export enum Locales {
  en_US = "en_US",
  zh_CN = "zh_CN",
  zh_TW = "zh_TW",
}

export enum Themes {
  light = "light",
  dark = "dark",
  cupcake = "cupcake",
  bumblebee = "bumblebee",
  emerald = "emerald",
  corporate = "corporate",
  synthwave = "synthwave",
  retro = "retro",
  cyberpunk = "cyberpunk",
  valentine = "valentine",
  halloween = "halloween",
  garden = "garden",
  forest = "forest",
  aqua = "aqua",
  lofi = "lofi",
  pastel = "pastel",
  fantasy = "fantasy",
  wireframe = "wireframe",
  black = "black",
  luxury = "luxury",
  dracula = "dracula",
  cmyk = "cmyk",
  autumn = "autumn",
  business = "business",
  acid = "acid",
  lemonade = "lemonade",
  night = "night",
  coffee = "coffee",
  winter = "winter",
}

export const DefaultConfig: Record<ConfigKeys, string> = {
  [ConfigKeys.AppTheme]: "light",
  [ConfigKeys.AppLocal]: "en_US",
};
