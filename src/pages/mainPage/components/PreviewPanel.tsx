import { observer } from "mobx-react-lite";
import { PanelContainer } from "@/libs/components/containers/PanelContainer.tsx";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { EmptyPreviewRender } from "@/pages/mainPage/components/contentRender/emptyRender.tsx";

export const PreviewPanel = observer(() => {
  const pastyStore = useStore(StoreNames.PastListStore);
  return (
    <PanelContainer>
      {pastyStore.selectedPasty === undefined && <EmptyPreviewRender />}
    </PanelContainer>
  );
});
