import type { ApiNames } from "../libs/constants";
import type { DatabaseApi } from "@/libs/apis/DatabaseApi.ts";

export interface IApiType {
  [ApiNames.Database]: DatabaseApi;
}

export interface IApi {
  init(): void;
}
