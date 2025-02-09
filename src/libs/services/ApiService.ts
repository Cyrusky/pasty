import { injectable } from "inversify";
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
import { callApi } from "@/libs/apis";

@injectable()
export class ApiService implements IApiService {
  async updateConfigByKey(
    key: ConfigKeys,
    value: string,
  ): Promise<ConfigModel> {
    return await callApi<ConfigModel>(CommandsName.updateConfigByKey, {
      key,
      value,
    });
  }

  async listAllConfig(): Promise<ConfigModel[]> {
    return await callApi<ConfigModel[]>(CommandsName.listAllConfig);
  }

  async getConfigByKey(key: ConfigKeys): Promise<ConfigModel> {
    return await callApi<ConfigModel>(CommandsName.getConfigByKey, {
      key,
    });
  }

  async deleteConfigByKey(key: ConfigKeys): Promise<ConfigModel> {
    return await callApi<ConfigModel>(CommandsName.deleteConfigByKey, {
      key,
    });
  }

  async addConfig(key: ConfigKeys, value: string): Promise<ConfigModel> {
    return await callApi<ConfigModel>(CommandsName.addConfig, { key, value });
  }

  async clearAllConfig(): Promise<number> {
    return await callApi<number>(CommandsName.clearAllConfig);
  }

  async getPagedPasty(
    request: PagedRequest,
  ): Promise<PagedApiResult<PastyModel>> {
    return await callApi<PagedApiResult<PastyModel>>(
      CommandsName.getPagedPasty,
      { request },
    );
  }

  async clearPasty(): Promise<ApiResult<number>> {
    return await callApi<ApiResult<number>>(CommandsName.clearAllPasty);
  }

  async getAllPasty() {
    return await callApi<ApiResult<PastyModel[]>>(CommandsName.getAllPasty);
  }
}
