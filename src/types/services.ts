import type { IInitializer } from "@/types/common.ts";
import type { ServiceNames } from "@/constants/ServiceNames.ts";
import type { DatabaseService } from "@/services/Database.ts";
import type { AppService } from "@/services/AppService.ts";

export interface IServiceType {
  [ServiceNames.Database]: DatabaseService;
  [ServiceNames.App]: AppService;
}

export interface IService extends IInitializer {
  // TODO: Define the properties of the service
}
