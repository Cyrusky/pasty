import React from "react";
import "./index.less";
import { SettingLayout } from "@/libs/components/layout/SettingLayout.tsx";
import { SettingLeftPanel } from "@/pages/settingPage/leftPanel.tsx";
import { SettingRightPanel } from "@/pages/settingPage/rightPanel.tsx";

export const SettingPage: React.FC = () => {
  return (
    <SettingLayout
      leftPanel={<SettingLeftPanel />}
      rightPanel={<SettingRightPanel />}
    />
  );
};
