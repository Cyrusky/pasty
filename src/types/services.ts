import type { ServiceNames } from "@/libs/constants/ServiceNames.ts";
import type { PastyService } from "@/libs/services/PastyService.ts";
import type { AppService } from "@/libs/services/AppService.ts";
import type { SettingService } from "@/libs/services/SettingService.ts";
import type { ApiService } from "@/libs/services/ApiService.ts";

export interface IServiceType {
  [ServiceNames.PastyService]: PastyService;
  [ServiceNames.App]: AppService;
  [ServiceNames.Setting]: SettingService;
  [ServiceNames.ApiService]: ApiService;
}
