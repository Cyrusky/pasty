import { Container } from "inversify";
import { ServiceNames } from "@/libs/constants/ServiceNames.ts";
import type { IService } from "@/types/services.ts";
import { ApiNames, StoreNames } from "@/libs/constants";
import { DatabaseService } from "@/libs/services/Database.ts";
import { DatabaseApi } from "@/libs/apis/DatabaseApi.ts";
import { AppService } from "@/libs/services/AppService.ts";
import { PasteListStore } from "@/libs/stores/PasteListStore.ts";
import { SettingService } from "@/libs/services/SettingService.ts";
import { SettingStore } from "@/libs/stores/SettingStore.ts";
import { PastingUIStore } from "@/libs/stores/PastingUIStore.ts";
import { SettingUIStore } from "@/libs/stores/SettingUIStore.ts";

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
    this.container
      .bind<IService>(ServiceNames.Database)
      .to(DatabaseService)
      .inSingletonScope();
    this.container
      .bind<IService>(ServiceNames.App)
      .to(AppService)
      .inSingletonScope();
    this.container
      .bind<IService>(ServiceNames.Setting)
      .to(SettingService)
      .inSingletonScope();
  }

  private bindApis() {
    this.container.bind(ApiNames.Database).to(DatabaseApi).inSingletonScope();
  }

  private bindStores() {
    this.container
      .bind<PasteListStore>(StoreNames.PastList)
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
