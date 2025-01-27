import type { ServiceNames } from "@/libs/constants/ServiceNames.ts";
import type { PastyService } from "@/libs/services/PastyService.ts";
import type { AppService } from "@/libs/services/AppService.ts";
import type { ConfigService } from "@/libs/services/ConfigService.ts";
import type { ApiService } from "@/libs/services/ApiService.ts";

export interface IServiceType {
  [ServiceNames.PastyService]: PastyService;
  [ServiceNames.App]: AppService;
  [ServiceNames.Setting]: ConfigService;
  [ServiceNames.ApiService]: ApiService;
}
