import { injectable } from "inversify";
import { makePersistable } from "mobx-persist-store";
import { makeAutoObservable } from "mobx";
import { DefaultConfig } from "@/libs/constants/configs.ts";
import type { ConfigModel } from "@/types";
import { ConfigKeys } from "@/types";

@injectable()
export class ConfigStore {
  configs: Record<ConfigKeys, string> = {
    [ConfigKeys.AppTheme]: DefaultConfig[ConfigKeys.AppTheme],
    [ConfigKeys.AppLocal]: DefaultConfig[ConfigKeys.AppLocal],
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: "configStore",
      properties: ["configs"],
      storage: window.localStorage,
    }).then((...args) => {
      console.log("makePersistable", ...args);
    });
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
