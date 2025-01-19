import { injectable } from "inversify";
import { BaseStore } from "@/stores/BaseStore.ts";

@injectable()
export class PasteListStore extends BaseStore {
  constructor() {
    super();
    console.log("PasteListStore");
  }
}
