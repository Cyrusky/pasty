import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import { ServiceNames, StoreNames } from "@/libs/constants";
import type { ApiService } from "@/libs/services/ApiService.ts";
import type { PasteListStore } from "@/libs/stores/PasteListStore.ts";

@injectable()
export class PastyService {
  constructor(
    @inject(ServiceNames.ApiService) private apiService: ApiService,
    @inject(StoreNames.PastListStore) private pastListStore: PasteListStore,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get hasPasty(): boolean {
    return this.pastListStore.pasty.length === 0;
  }

  async loadPasty() {
    await this.apiService.getAllPasty();
  }
}
