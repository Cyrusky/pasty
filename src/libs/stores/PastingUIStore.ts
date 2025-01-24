import { makeAutoObservable } from "mobx";
import { injectable } from "inversify";

@injectable()
export class PastingUIStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
