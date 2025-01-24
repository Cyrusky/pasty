import type { IInitializer } from "@/types/common.ts";
import type { ServiceNames } from "@/libs/constants/ServiceNames.ts";
import type { DatabaseService } from "@/libs/services/Database.ts";
import type { AppService } from "@/libs/services/AppService.ts";
import type { SettingService } from "@/libs/services/SettingService.ts";

export interface IServiceType {
  [ServiceNames.Database]: DatabaseService;
  [ServiceNames.App]: AppService;
  [ServiceNames.Setting]: SettingService;
}

export interface IService extends IInitializer {
  // TODO: Define the properties of the service
}
