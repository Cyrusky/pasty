import { injectable } from "inversify";

@injectable()
export class BaseService {
  init(): void {
    throw new Error("Method not implemented.");
  }
}
