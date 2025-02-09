import { IServiceType, IStoreType } from "@/types";
import { ServiceNames, StoreNames } from "@/libs/constants";
import { IOC } from "@/libs/container";
import { ServiceContext, StoreContext } from "@/hooks/providers.ts";
import { FC, PropsWithChildren } from "react";
import { PastyService } from "@/libs/services/PastyService.ts";
import { PasteListStore } from "@/libs/stores/PasteListStore.ts";
import { AppService } from "@/libs/services/AppService.ts";
import { ConfigService } from "@/libs/services/ConfigService.ts";
import { ConfigStore } from "@/libs/stores/ConfigStore.ts";
import { SettingUIStore } from "@/libs/stores/SettingUIStore.ts";
import { PastingUIStore } from "@/libs/stores/PastingUIStore.ts";
import { ApiService } from "@/libs/services/ApiService.ts";

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
  get [ServiceNames.ApiService]() {
    return IOC.get<ApiService>(ServiceNames.ApiService);
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
      <StoreContext.Provider value={Stores}>{children}</StoreContext.Provider>
    </ServiceContext.Provider>
  );
};
