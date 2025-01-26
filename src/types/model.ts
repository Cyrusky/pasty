export enum PastyType {
  text,
  image,
  html,
}

export interface PastyModel {
  id: string;
  pastyType: PastyType;
  thumbnail: string;
  content: string;
  createdAt: string;
}

export interface ConfigModel {
  key: string;
  value: string;
}

export interface AssetModel {
  id: string;
  pastyId: string;
  pastyType: string;
  assetPath: string;
  createdAt: string;
}
