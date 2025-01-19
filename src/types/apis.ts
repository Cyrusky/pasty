import type { ApiNames } from "@/constants";
import type { DatabaseApi } from "@/apis/DatabaseApi.ts";

export interface IApiType {
  [ApiNames.Database]: DatabaseApi;
}
export interface IApi {
  init(): void;
}
