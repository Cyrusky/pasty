import "./index.less";
import { WindowButtons } from "@/libs/components/TitleBar/components/buttons.tsx";
import { FC } from "react";
import { TitleBarTabs } from "@/components/TitleBarTabs.tsx";

export const TitleBar: FC = () => {
  const tabs = ["全部", "纯文本", "富文本", "Html", "图片", "文件"];

  return (
    <div className="title-bar" data-tauri-drag-region={true}>
      <TitleBarTabs tabs={tabs} />
      <WindowButtons />
    </div>
  );
};
