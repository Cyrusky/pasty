import type { StoreNames } from "@/libs/constants";
import type { PasteListStore } from "@/libs/stores/PasteListStore.ts";
import type { ConfigStore } from "@/libs/stores/ConfigStore.ts";
import type { PastingUIStore } from "@/libs/stores/PastingUIStore.ts";
import type { SettingUIStore } from "@/libs/stores/SettingUIStore.ts";

export interface IStoreType {
  [StoreNames.PastListStore]: PasteListStore;
  [StoreNames.Configs]: ConfigStore;
  [StoreNames.PastingUIStore]: PastingUIStore;
  [StoreNames.SettingUIStore]: SettingUIStore;
}
