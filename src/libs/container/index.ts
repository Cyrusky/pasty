import { Container } from "inversify";
import { ServiceNames } from "@/libs/constants/ServiceNames.ts";
import type { ApiNames } from "@/libs/constants";
import { StoreNames } from "@/libs/constants";
import { PastyService } from "@/libs/services/PastyService.ts";
import { AppService } from "@/libs/services/AppService.ts";
import { PasteListStore } from "@/libs/stores/PasteListStore.ts";
import { ConfigService } from "@/libs/services/ConfigService.ts";
import { ConfigStore } from "@/libs/stores/ConfigStore.ts";
import { PastingUIStore } from "@/libs/stores/PastingUIStore.ts";
import { SettingUIStore } from "@/libs/stores/SettingUIStore.ts";
import { ApiService } from "@/libs/services/ApiService.ts";

export class IOC {
  static instance: IOC;

  private container: Container;

  private constructor() {
    this.container = new Container();
    this.bindServices();
    this.bindStores();
  }

  static get<T>(serviceName: ServiceNames | ApiNames | StoreNames): T {
    if (!IOC.instance) {
      IOC.instance = new IOC();
    }
    return IOC.instance.container.get(serviceName) as T;
  }

  private bindServices() {
    this.container.bind<ApiService>(ServiceNames.ApiService).to(ApiService);
    this.container
      .bind<PastyService>(ServiceNames.PastyService)
      .to(PastyService)
      .inSingletonScope();
    this.container
      .bind<AppService>(ServiceNames.App)
      .to(AppService)
      .inSingletonScope();
    this.container
      .bind<ConfigService>(ServiceNames.Setting)
      .to(ConfigService)
      .inSingletonScope();
  }

  private bindStores() {
    this.container
      .bind<PasteListStore>(StoreNames.PastListStore)
      .to(PasteListStore)
      .inSingletonScope();
    this.container
      .bind<ConfigStore>(StoreNames.Configs)
      .to(ConfigStore)
      .inSingletonScope();
    this.container
      .bind<PastingUIStore>(StoreNames.PastingUIStore)
      .to(PastingUIStore)
      .inSingletonScope();
    this.container
      .bind<SettingUIStore>(StoreNames.SettingUIStore)
      .to(SettingUIStore)
      .inSingletonScope();
  }
}
