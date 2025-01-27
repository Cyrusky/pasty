import { IApiType, IServiceType, IStoreType } from "@/types";
import { ApiNames, ServiceNames, StoreNames } from "@/libs/constants";
import { IOC } from "@/libs/container";
import { ApiContext, ServiceContext, StoreContext } from "@/hooks/providers.ts";
import { FC, PropsWithChildren } from "react";
import { PastyService } from "@/libs/services/PastyService.ts";
import { DatabaseApi } from "@/libs/apis/DatabaseApi.ts";
import { PasteListStore } from "@/libs/stores/PasteListStore.ts";
import { AppService } from "@/libs/services/AppService.ts";
import { ConfigService } from "@/libs/services/ConfigService.ts";
import { ConfigStore } from "@/libs/stores/ConfigStore.ts";
import { SettingUIStore } from "@/libs/stores/SettingUIStore.ts";
import { PastingUIStore } from "@/libs/stores/PastingUIStore.ts";

export const Services: IServiceType = {
  get [ServiceNames.PastyService]() {
    return IOC.get<PastyService>(ServiceNames.PastyService);
  },
  get [ServiceNames.App]() {
    return IOC.get<AppService>(ServiceNames.App);
  },
  get [ServiceNames.Setting]() {
    return IOC.get<ConfigService>(ServiceNames.Setting);
  },
};

export const Apis: IApiType = {
  get [ApiNames.Database]() {
    return IOC.get<DatabaseApi>(ApiNames.Database);
  },
};

export const Stores: IStoreType = {
  get [StoreNames.PastListStore]() {
    return IOC.get<PasteListStore>(StoreNames.PastListStore);
  },
  get [StoreNames.Configs]() {
    return IOC.get<ConfigStore>(StoreNames.Configs);
  },
  get [StoreNames.SettingUIStore]() {
    return IOC.get<SettingUIStore>(StoreNames.SettingUIStore);
  },
  get [StoreNames.PastingUIStore]() {
    return IOC.get<PastingUIStore>(StoreNames.PastingUIStore);
  },
};

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ServiceContext.Provider value={Services}>
      <StoreContext.Provider value={Stores}>
        <ApiContext.Provider value={Apis}>{children}</ApiContext.Provider>
      </StoreContext.Provider>
    </ServiceContext.Provider>
  );
};
