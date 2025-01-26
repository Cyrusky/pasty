import { inject, injectable } from "inversify";
import { CommandsName, StoreNames } from "@/libs/constants";
import type { PasteListStore } from "@/libs/stores/PasteListStore.ts";
import { invoke } from "@tauri-apps/api/core";

@injectable()
export class ApiService {
  constructor(
    @inject(StoreNames.PastListStore) private pasteListStore: PasteListStore,
  ) {}

  async getAllPasty(page: number, pageSize: number) {
    const result = await invoke(CommandsName.getPagedPasty, {
      request: {
        page,
        pageSize,
      },
    });
    console.log(result);
  }
}
