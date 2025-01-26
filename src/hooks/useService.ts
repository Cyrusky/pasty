import type { ServiceNames } from "@/libs/constants/ServiceNames.ts";
import { IOC } from "@/libs/container";
import type { IServiceType } from "@/types";

export const useService = <T extends ServiceNames>(serviceName: T) => {
  return IOC.get<IServiceType[T]>(serviceName);
};
