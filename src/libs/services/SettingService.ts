import { BaseService } from "@/libs/services/BaseService.ts";
import { inject, injectable } from "inversify";
import type { SettingStore } from "@/libs/stores/SettingStore.ts";
import { StoreNames } from "@/libs/constants";
import type {
  Locales,
  SettingKeys,
  Themes,
} from "@/libs/constants/settings.ts";

@injectable()
export class SettingService extends BaseService {
  constructor(@inject(StoreNames.Setting) private settingStore: SettingStore) {
    super();
  }

  getSetting<T>(key: SettingKeys) {
    return this.settingStore[key] as T;
  }

  setLocale(locale: Locales) {
    this.settingStore.locale = locale;
  }

  setTheme(theme: Themes) {
    this.settingStore.theme = theme;
  }
}
