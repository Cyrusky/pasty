import { IOC } from "@/container";
import type { IApiType } from "@/types";
import type { ApiNames } from "@/constants";

export const useApi = <T extends ApiNames>(apiNames: T) => {
  return IOC.get<IApiType[T]>(apiNames);
};
