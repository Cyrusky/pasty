import styled from "styled-components";
import { FC, PropsWithChildren } from "react";

const GlobalContainerInner = styled.div`
  background-color: var(--main-page-bg);
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: var(--border-radius);
  display: flex;
  flex-flow: column nowrap;
  row-gap: 0;
`;

export const GlobalContainer: FC<PropsWithChildren> = ({ children }) => {
  return <GlobalContainerInner>{children}</GlobalContainerInner>;
};

const PageContainerInner = styled.div`
  flex: 1;
`;

export const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return <PageContainerInner>{children}</PageContainerInner>;
};
