import { injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import type { PastyModel } from "@/types";

@injectable()
export class PasteListStore {
  pasty: PastyModel[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  loadPasty(data: PastyModel[]) {
    this.pasty = data;
  }
}
