import { BaseService } from "@/services/BaseService.ts";
import { injectable } from "inversify";

@injectable()
export class AppService extends BaseService {
  constructor() {
    super();
    console.log("AppService");
  }
}
