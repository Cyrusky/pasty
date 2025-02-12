import { observer } from "mobx-react-lite";
import { PanelContainer } from "@/libs/components/containers/PanelContainer.tsx";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { EmptyPreviewRender } from "@/pages/mainPage/components/contentRender/emptyRender.tsx";

export const PreviewPanel = observer(() => {
  const pastyStore = useStore(StoreNames.PastListStore);
  return (
    <PanelContainer>
      <div className="h-full  ">
        {pastyStore.selectedPasty === undefined && <EmptyPreviewRender />}
        {/*{pastyStore.selectedPasty?.pastyType === PastyType.Rtf && (*/}
        {/*  <RtfPreviewRender pasty={pastyStore.selectedPasty} />*/}
        {/*)}*/}
      </div>
    </PanelContainer>
  );
});
