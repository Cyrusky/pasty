import React, { useEffect } from "react";
import "./index.less";
import { PageContainer } from "@/libs/components/containers/PageContainer.tsx";
import { PastyListPanel } from "@/pages/mainPage/components/PastyListPanel.tsx";
import { PreviewPanel } from "@/pages/mainPage/components/PreviewPanel.tsx";
import { observer } from "mobx-react-lite";
import { useService } from "@/hooks/useService.ts";
import { ServiceNames, StoreNames } from "@/libs/constants";
import { ConfigKeys } from "@/types";
import { useStore } from "@/hooks";

export const MainPage: React.FC = observer(() => {
  const pastyService = useService(ServiceNames.PastyService);
  const configStore = useStore(StoreNames.Configs);
  useEffect(() => {
    pastyService.loadPasty();
  }, []);

  return (
    <PageContainer className="flex flex-row w-full">
      {configStore.getConfigByKey(ConfigKeys.AppLocal)}
      <div className="flex-1">
        <PastyListPanel />
      </div>
      <div className="flex-1">
        <PreviewPanel />
      </div>
    </PageContainer>
  );
});
