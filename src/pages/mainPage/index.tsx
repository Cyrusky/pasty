import React from "react";
import "./index.less";
import { SearchPanel } from "@/pages/mainPage/components/SearchPanel.tsx";
import { ContentPanel } from "@/pages/mainPage/components/ContentPanel.tsx";
import { FooterPanel } from "@/pages/mainPage/components/FooterPanel.tsx";

export const MainPage: React.FC = () => {
  return (
    <div className="main-container flex flex-col">
      <SearchPanel />
      <ContentPanel />
      <FooterPanel />
    </div>
  );
};
