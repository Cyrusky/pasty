import type {
  ApiResult,
  ConfigKeys,
  ConfigModel,
  PagedApiResult,
  PagedRequest,
  PastyModel,
} from "@/types/entities.ts";

export enum CommandsName {
  // Pasty commands
  setAlwaysOnTop = "set_always_on_top",
  setShadow = "set_shadow",
  getPagedPasty = "get_paged_pasty",
  getAllPasty = "get_all_pasty",
  clearAllPasty = "clear_all_pasty",

  // Config commands
  addConfig = "add_config",
  listAllConfig = "list_all_config",
  getConfigByKey = "get_config_by_key",
  deleteConfigByKey = "delete_config_by_key",
  clearAllConfig = "clear_all_config",
}

export interface IApiService {
  listAllConfig(): Promise<ConfigModel[]>;

  getConfigByKey(key: ConfigKeys): Promise<ConfigModel>;

  deleteConfigByKey(key: ConfigKeys): Promise<ConfigModel>;

  addConfig(key: ConfigKeys, value: string): Promise<ConfigModel>;

  updateConfigByKey(key: ConfigKeys, value: string): Promise<ConfigModel>;

  clearAllConfig(): Promise<number>;

  getAllPasty(): Promise<ApiResult<PastyModel[]>>;

  getPagedPasty(request: PagedRequest): Promise<PagedApiResult<PastyModel>>;

  clearPasty(): Promise<ApiResult<number>>;
}
