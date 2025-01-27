import { BaseService } from "@/libs/services/BaseService.ts";
import { inject, injectable } from "inversify";
import { StoreNames } from "@/libs/constants";
import type { ConfigStore } from "@/libs/stores/ConfigStore.ts";
import type { Themes } from "@/libs/constants/configs.ts";
import { DefaultConfig, Locales } from "@/libs/constants/configs.ts";
import { ConfigKeys } from "@/types";

@injectable()
export class AppService extends BaseService {
  constructor(@inject(StoreNames.Configs) private settingStore: ConfigStore) {
    super();
  }

  setTheme(value?: Themes) {
    this.settingStore.updateConfig({
      key: ConfigKeys.AppTheme,
      value: value || DefaultConfig[ConfigKeys.AppTheme],
    });
  }

  switchLocales() {
    const locale = this.settingStore.getConfigByKey(ConfigKeys.AppLocal);
    this.settingStore.updateConfig({
      key: ConfigKeys.AppLocal,
      value: locale === Locales.en_US ? Locales.zh_CN : Locales.en_US,
    });
  }
}
