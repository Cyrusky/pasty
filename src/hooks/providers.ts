import { createContext } from "react";
import type { IApiType, IServiceType, IStoreType } from "@/types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const ServiceContext = createContext<IServiceType>({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const ApiContext = createContext<IApiType>({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const StoreContext = createContext<IStoreType>({});
