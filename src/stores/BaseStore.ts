import type { IStores } from "@/types";
import { injectable } from "inversify";

@injectable()
export class BaseStore implements IStores {}
