import { IOC } from "../libs/container";
import type { IApiType } from "@/types";
import type { ApiNames } from "../libs/constants";

export const useApi = <T extends ApiNames>(apiNames: T) => {
  return IOC.get<IApiType[T]>(apiNames);
};
