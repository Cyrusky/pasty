import { injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import type { PastyModel } from "@/types";

@injectable()
export class PasteListStore {
  pasty: PastyModel[] = [];
  selectedPasty: PastyModel | undefined = undefined;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  loadPasty(data: PastyModel[]) {
    this.pasty = data;
  }

  setSelectPasty(pasty: PastyModel) {
    this.selectedPasty = pasty;
  }

  clearSelectPasty() {
    this.selectedPasty = undefined;
  }
}
