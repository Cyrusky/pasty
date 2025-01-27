import { injectable } from "inversify";
import { invoke } from "@tauri-apps/api/core";
import type {
  ApiResult,
  ConfigKeys,
  ConfigModel,
  IApiService,
  PagedApiResult,
  PagedRequest,
  PastyModel,
} from "@/types";
import { CommandsName } from "@/types";

@injectable()
export class ApiService implements IApiService {
  async updateConfigByKey(
    key: ConfigKeys,
    value: string,
  ): Promise<ConfigModel> {
    return await invoke<ConfigModel>(CommandsName.updateConfigByKey, {
      key,
      value,
    });
  }

  async listAllConfig(): Promise<ConfigModel[]> {
    return await invoke<ConfigModel[]>(CommandsName.listAllConfig);
  }

  async getConfigByKey(key: ConfigKeys): Promise<ConfigModel> {
    return await invoke<ConfigModel>(CommandsName.getConfigByKey, {
      key,
    });
  }

  async deleteConfigByKey(key: ConfigKeys): Promise<ConfigModel> {
    return await invoke<ConfigModel>(CommandsName.deleteConfigByKey, {
      key,
    });
  }

  async addConfig(key: ConfigKeys, value: string): Promise<ConfigModel> {
    return await invoke<ConfigModel>(CommandsName.addConfig, { key, value });
  }

  async clearAllConfig(): Promise<number> {
    return await invoke<number>(CommandsName.clearAllConfig);
  }

  async getPagedPasty(
    request: PagedRequest,
  ): Promise<PagedApiResult<PastyModel>> {
    return await invoke<PagedApiResult<PastyModel>>(
      CommandsName.getPagedPasty,
      { request },
    );
  }

  async clearPasty(): Promise<ApiResult<number>> {
    return await invoke<ApiResult<number>>(CommandsName.clearAllPasty);
  }

  async getAllPasty() {
    return await invoke<ApiResult<PastyModel>>(CommandsName.getAllPasty);
  }
}
