import type { StorageController } from "mobx-persist-store/lib/esm2017/types";
import type { ConfigModel } from "@/types";
import { CommandsName, ConfigKeys } from "@/types";
import { callApi } from "@/libs/apis";
import { DefaultConfig } from "@/libs/constants/configs.ts";

export const CONFIG_NAME = "configStore";

export const RustStorageAdapter: StorageController = {
  async getItem(_: ConfigKeys): Promise<string> {
    let data: ConfigModel[];
    try {
      data = await callApi<ConfigModel[]>(CommandsName.listAllConfig);
    } catch (_) {
      data = [];
    }
    const configFromDatabase: Record<string, string> = {};
    data.forEach((e) => {
      configFromDatabase[e.key] = e.value;
    });
    const result: Record<ConfigKeys, string> = {
      [ConfigKeys.AppLocal]: DefaultConfig[ConfigKeys.AppLocal],
      [ConfigKeys.AppTheme]: DefaultConfig[ConfigKeys.AppTheme],
    };
    Object.keys(result).forEach((key) => {
      result[key as ConfigKeys] =
        configFromDatabase[key] || result[key as ConfigKeys];
    });
    return JSON.stringify({
      configs: result,
    });
  },
  async removeItem(_: string): Promise<void> {
    debugger;
    await callApi(CommandsName.clearAllConfig);
  },
  async setItem(_: string, value: string): Promise<void> {
    const { configs } = JSON.parse(value);
    const keys = Object.keys(configs);
    debugger;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i] as ConfigKeys;
      const value = configs[key];
      await callApi(CommandsName.addConfig, {
        key,
        value,
      });
    }
  },
};
