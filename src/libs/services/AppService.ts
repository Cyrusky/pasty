import { BaseService } from "@/libs/services/BaseService.ts";
import { inject, injectable } from "inversify";
import { StoreNames } from "@/libs/constants";
import type { SettingStore } from "@/libs/stores/SettingStore.ts";
import type { Themes } from "@/libs/constants/settings.ts";

@injectable()
export class AppService extends BaseService {
  constructor(@inject(StoreNames.Setting) private settingStore: SettingStore) {
    super();
    console.log("AppService");
  }

  setTheme(value: Themes) {
    this.settingStore.theme = value;
  }

  changeTheme(id: Themes) {
    this.settingStore._theme = id;
  }
}
