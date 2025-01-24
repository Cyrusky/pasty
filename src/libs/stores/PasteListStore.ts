import { injectable } from "inversify";
import { makeAutoObservable } from "mobx";

@injectable()
export class PasteListStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
