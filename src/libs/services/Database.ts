import { injectable } from "inversify";
import { BaseService } from "@/libs/services/BaseService.ts";

@injectable()
export class DatabaseService extends BaseService {
  constructor() {
    super();
    this.init();
  }
}
