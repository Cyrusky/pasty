import { injectable } from "inversify";
import { makePersistable } from "mobx-persist-store";
import { makeAutoObservable } from "mobx";
import { DefaultConfig } from "@/libs/constants/configs.ts";
import type { ConfigModel } from "@/types";
import { ConfigKeys } from "@/types";
import { isWebDev } from "@/libs/utils/env.ts";
import { CONFIG_NAME, RustStorageAdapter } from "@/libs/stores/StoreAdapter.ts";

@injectable()
export class ConfigStore {
  configs: Record<ConfigKeys, string> = {
    [ConfigKeys.AppTheme]: DefaultConfig[ConfigKeys.AppTheme],
    [ConfigKeys.AppLocal]: DefaultConfig[ConfigKeys.AppLocal],
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: CONFIG_NAME,
      properties: ["configs"],
      storage: {
        getItem: isWebDev
          ? localStorage.getItem.bind(this)
          : RustStorageAdapter.getItem.bind(this),
        setItem: isWebDev
          ? localStorage.setItem.bind(this)
          : RustStorageAdapter.setItem.bind(this),
        removeItem: isWebDev
          ? localStorage.removeItem.bind(this)
          : RustStorageAdapter.removeItem.bind(this),
      },
      stringify: true,
    }).then();
  }

  loadConfig(configs: ConfigModel[]) {
    configs.forEach((config) => {
      this.configs[config.key] = config.value;
    });
  }

  getConfigByKey(key: ConfigKeys) {
    return this.configs[key];
  }

  updateConfig(config: ConfigModel) {
    this.configs[config.key] = config.value;
  }
}
