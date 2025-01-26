import { Container } from "inversify";
import { ServiceNames } from "@/libs/constants/ServiceNames.ts";
import { ApiNames, StoreNames } from "@/libs/constants";
import { PastyService } from "@/libs/services/PastyService.ts";
import { DatabaseApi } from "@/libs/apis/DatabaseApi.ts";
import { AppService } from "@/libs/services/AppService.ts";
import { PasteListStore } from "@/libs/stores/PasteListStore.ts";
import { SettingService } from "@/libs/services/SettingService.ts";
import { SettingStore } from "@/libs/stores/SettingStore.ts";
import { PastingUIStore } from "@/libs/stores/PastingUIStore.ts";
import { SettingUIStore } from "@/libs/stores/SettingUIStore.ts";
import { ApiService } from "@/libs/services/ApiService.ts";

export class IOC {
  static instance: IOC;

  private container: Container;

  private constructor() {
    this.container = new Container();
    this.bindServices();
    this.bindApis();
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
      .bind<SettingService>(ServiceNames.Setting)
      .to(SettingService)
      .inSingletonScope();
  }

  private bindApis() {
    this.container.bind(ApiNames.Database).to(DatabaseApi).inSingletonScope();
  }

  private bindStores() {
    this.container
      .bind<PasteListStore>(StoreNames.PastListStore)
      .to(PasteListStore)
      .inSingletonScope();
    this.container
      .bind<SettingStore>(StoreNames.Setting)
      .to(SettingStore)
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
