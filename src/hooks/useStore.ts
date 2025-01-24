import { IOC } from "../libs/container";
import type { IStoreType } from "@/types";
import type { StoreNames } from "../libs/constants";

export const useStore = <T extends StoreNames>(storeName: T) => {
  return IOC.get<IStoreType[T]>(storeName);
};
