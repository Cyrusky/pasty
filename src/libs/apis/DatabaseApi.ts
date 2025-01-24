import type { IApi } from "@/types";
import { BaseApi } from "@/libs/apis/baseApi.ts";
import { injectable } from "inversify";

@injectable()
export class DatabaseApi extends BaseApi implements IApi {
  constructor() {
    super();
  }
}
