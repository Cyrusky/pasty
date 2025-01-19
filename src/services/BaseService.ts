import { IService } from "@/types/services.ts";
import { injectable } from "inversify";

@injectable()
export class BaseService implements IService {
  init(): void {
    throw new Error("Method not implemented.");
  }
}
