import { BaseService } from "@/libs/services/BaseService.ts";
import { inject, injectable } from "inversify";
import type { ConfigStore } from "@/libs/stores/ConfigStore.ts";
import { ServiceNames, StoreNames } from "@/libs/constants";
import type { ConfigKeys, ConfigModel } from "@/types";
import type { ApiService } from "@/libs/services/ApiService.ts";
import { DefaultConfig } from "@/libs/constants/configs.ts";

@injectable()
export class ConfigService extends BaseService {
  constructor(
    @inject(ServiceNames.ApiService) private apiService: ApiService,
    @inject(StoreNames.Configs) private configStore: ConfigStore,
  ) {
    super();
  }

  async loadService() {
    const result = await this.apiService.listAllConfig();
    this.configStore.loadConfig(result);
  }

  async getSetting(key: ConfigKeys, refresh: boolean = false) {
    let config: ConfigModel;
    if (refresh) {
      try {
        config = await this.apiService.getConfigByKey(key);
      } catch (e) {
        console.warn("There is no such config in database");
        config = await this.writeDefaultConfig(key);
      }
      this.configStore.updateConfig(config);
    }
    return this.configStore.getConfigByKey(key);
  }

  async setConfig(key: ConfigKeys, value: string) {
    await this.apiService.updateConfigByKey(key, value);
    this.configStore.updateConfig({
      key,
      value,
    });
  }

  private async writeDefaultConfig(key: ConfigKeys) {
    const configValue = DefaultConfig[key];
    await this.apiService.updateConfigByKey(key, configValue);
    return {
      key,
      value: configValue,
    };
  }
}
