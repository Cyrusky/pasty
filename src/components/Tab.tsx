import "./Tab.less";
import { FC, ReactNode, useState } from "react";
import clsx from "clsx";

interface TitleBarTabsProps {
  activeTab?: number;
  onActiveChange?: (tab: number) => void;
  tabs: ReactNode[];
}

export const TitleBarTabs: FC<TitleBarTabsProps> = ({
  activeTab,
  onActiveChange,
  tabs,
}) => {
  const [active, setActive] = useState(activeTab || 0);

  return (
    <div className="title-bar-tabs-container">
      <div className="title-bar-tab title-bar-tab-inactive"></div>
      {tabs.map((tab, index) => (
        <div
          className={clsx("title-bar-tab", {
            "title-bar-tab-active": active === index,
            "title-bar-tab-inactive": active !== index,
          })}
          key={index}
          onClick={() => {
            setActive(index);
            onActiveChange?.(index);
          }}
        >
          {tab}
        </div>
      ))}
      <div className="title-bar-tab title-bar-tab-inactive"> </div>
    </div>
  );
};
