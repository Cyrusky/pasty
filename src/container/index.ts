import { Container } from "inversify";
import { ServiceNames } from "@/constants/ServiceNames";
import type { IService } from "@/types/services.ts";
import { ApiNames, StoreNames } from "@/constants";
import { DatabaseService } from "@/services/Database.ts";
import { DatabaseApi } from "@/apis/DatabaseApi.ts";
import { AppService } from "@/services/AppService.ts";
import type { IStores } from "@/types";
import { PasteListStore } from "@/stores/PasteListStore.ts";

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
  }

  private bindApis() {
    this.container.bind(ApiNames.Database).to(DatabaseApi).inSingletonScope();
  }

  private bindStores() {
    this.container
      .bind<IStores>(StoreNames.PastList)
      .to(PasteListStore)
      .inSingletonScope();
  }
}
