import { IApiType, IServiceType, IStoreType } from "@/types";
import { ApiNames, ServiceNames, StoreNames } from "@/libs/constants";
import { IOC } from "@/libs/container";
import { ApiContext, ServiceContext, StoreContext } from "@/hooks/providers.ts";
import { FC, PropsWithChildren } from "react";
import { DatabaseService } from "@/libs/services/Database.ts";
import { DatabaseApi } from "@/libs/apis/DatabaseApi.ts";
import { PasteListStore } from "@/libs/stores/PasteListStore.ts";
import { AppService } from "@/libs/services/AppService.ts";
import { SettingService } from "@/libs/services/SettingService.ts";
import { SettingStore } from "@/libs/stores/SettingStore.ts";
import { SettingUIStore } from "@/libs/stores/SettingUIStore.ts";
import { PastingUIStore } from "@/libs/stores/PastingUIStore.ts";

export const Services: IServiceType = {
  get [ServiceNames.Database]() {
    return IOC.get<DatabaseService>(ServiceNames.Database);
  },
  get [ServiceNames.App]() {
    return IOC.get<AppService>(ServiceNames.App);
  },
  get [ServiceNames.Setting]() {
    return IOC.get<SettingService>(ServiceNames.Setting);
  },
};

export const Apis: IApiType = {
  get [ApiNames.Database]() {
    return IOC.get<DatabaseApi>(ApiNames.Database);
  },
};

export const Stores: IStoreType = {
  get [StoreNames.PastList]() {
    return IOC.get<PasteListStore>(StoreNames.PastList);
  },
  get [StoreNames.Setting]() {
    return IOC.get<SettingStore>(StoreNames.Setting);
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
