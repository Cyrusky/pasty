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
  Text = "Text",
  Html = "Html",
  Rtf = "Rtf",
  Image = "Image",
  File = "File",
}

export interface PastyModel {
  id: number;
  pastyType: PastyType;
  hash: string;
  thumbnail: string;
  content: string;
  pined: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AssetModel {
  id: number;
  pastyId: string;
  pastyType: string;
  assetPath: string;
  createdAt: string;
}
