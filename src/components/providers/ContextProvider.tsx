import { IApiType, IServiceType, IStoreType } from "@/types";
import { ApiNames, ServiceNames, StoreNames } from "@/constants";
import { IOC } from "@/container";
import { ApiContext, ServiceContext, StoreContext } from "@/hooks/providers.ts";
import { FC, PropsWithChildren } from "react";
import { DatabaseService } from "@/services/Database.ts";
import { DatabaseApi } from "@/apis/DatabaseApi.ts";
import { PasteListStore } from "@/stores/PasteListStore.ts";
import { AppService } from "@/services/AppService.ts";

export const Services: IServiceType = {
  get [ServiceNames.Database]() {
    return IOC.get<DatabaseService>(ServiceNames.Database);
  },
  get [ServiceNames.App]() {
    return IOC.get<AppService>(ServiceNames.App);
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
