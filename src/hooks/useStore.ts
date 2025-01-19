import { IOC } from "@/container";
import type { IStoreType } from "@/types";
import type { StoreNames } from "@/constants";

export const useStore = <T extends StoreNames>(storeName: T) => {
  return IOC.get<IStoreType[T]>(storeName);
};
