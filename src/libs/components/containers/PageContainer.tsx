import "./PageContainer.less";
import { FC, PropsWithChildren } from "react";

export const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return <section className="page-container">{children}</section>;
};
