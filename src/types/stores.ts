import type { StoreNames } from "@/libs/constants";
import type { PasteListStore } from "@/libs/stores/PasteListStore.ts";
import type { SettingStore } from "@/libs/stores/SettingStore.ts";
import type { PastingUIStore } from "@/libs/stores/PastingUIStore.ts";
import type { SettingUIStore } from "@/libs/stores/SettingUIStore.ts";

export interface IStoreType {
  [StoreNames.PastList]: PasteListStore;
  [StoreNames.Setting]: SettingStore;
  [StoreNames.PastingUIStore]: PastingUIStore;
  [StoreNames.SettingUIStore]: SettingUIStore;
}
