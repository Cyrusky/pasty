import type { IApi } from "@/types";
import { injectable } from "inversify";

@injectable()
export class BaseApi implements IApi {
  init() {
    console.log("BaseApi init");
  }
}
