export interface PagedRequest {
  page: number;
  pageSize: number;
}

export enum ConfigKeys {
  AppTheme = "app.theme",
  AppLocal = "app.local",
}

export interface PagedApiResult<T> {
  status: boolean;
  total: number;
  page: number;
  pageSize: number;
  data: T[];
  msg: string;
}

export interface ApiResult<T> {
  status: boolean;
  data: T;
  msg: string;
}

export interface ConfigModel {
  key: ConfigKeys;
  value: string;
}

export enum PastyType {
  text,
  image,
  html,
}

export interface PastyModel {
  id: string;
  pastyType: PastyType;
  hash: string;
  thumbnail: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface AssetModel {
  id: string;
  pastyId: string;
  pastyType: string;
  assetPath: string;
  createdAt: string;
}
