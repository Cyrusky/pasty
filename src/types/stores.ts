import type { StoreNames } from "@/constants";
import type { PasteListStore } from "@/stores/PasteListStore.ts";

export interface IStores {}

export interface IStoreType {
  [StoreNames.PastList]: PasteListStore;
}
