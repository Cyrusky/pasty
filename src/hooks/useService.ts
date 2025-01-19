import type { ServiceNames } from "@/constants/ServiceNames.ts";
import { IOC } from "@/container";
import type { IServiceType } from "@/types";

export const useService = <T extends ServiceNames>(serviceName: T) => {
  return IOC.get<IServiceType[T]>(serviceName);
};
