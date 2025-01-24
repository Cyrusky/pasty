import { injectable } from "inversify";
import { makePersistable } from "mobx-persist-store";
import { makeAutoObservable } from "mobx";
import { Locales, Themes } from "@/libs/constants/settings.ts";
import { changeTheme } from "@/libs/utils/dom.ts";

@injectable()
export class SettingStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: "settings",
      properties: ["_theme", "_locale"],
      storage: window.localStorage,
    }).then((...args) => {
      console.log("makePersistable", ...args);
    });
  }

  _theme: Themes = Themes.light;

  get theme(): Themes {
    return this._theme;
  }

  set theme(value: Themes) {
    this._theme = value;
    changeTheme(value);
  }

  _locale: Locales = Locales.zh_CN;

  get locale(): Locales {
    return this._locale;
  }

  set locale(value: Locales) {
    this._locale = value;
  }
}
