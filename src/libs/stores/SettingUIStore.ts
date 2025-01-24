import { makeAutoObservable } from "mobx";
import { injectable } from "inversify";

export enum SettingMenu {
  Appearance = "appearance",
  Clipboard = "clipboard",
}

export interface SettingPageStore {
  activeMenu: SettingMenu;
}

@injectable()
export class SettingUIStore {
  settingPage: SettingPageStore = {
    activeMenu: SettingMenu.Appearance,
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get activeSettingMenu() {
    return this.settingPage.activeMenu;
  }

  switchSettingMenu(menu: SettingMenu) {
    this.settingPage.activeMenu = menu;
  }
}
