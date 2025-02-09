import styled from "styled-components";
import { WindowButtons } from "@/libs/components/TitleBar/components/buttons.tsx";
import { FC } from "react";
import { TitleBarTabs } from "@/components/Tab.tsx";

const TitleBarInner = styled.div`
  height: var(--title-bar-height);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  background: var(--title-bar-bg);
  position: relative;
`;

export const TitleBar: FC = () => {
  const tabs = ["全部", "纯文本", "富文本", "Html", "图片", "文件"];

  return (
    <TitleBarInner data-tauri-drag-region={true}>
      <TitleBarTabs tabs={tabs} />
      <WindowButtons />
    </TitleBarInner>
  );
};
