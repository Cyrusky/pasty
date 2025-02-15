import "./PreviewPanel.scss";
import { observer } from "mobx-react-lite";
import { PanelContainer } from "@/libs/components/containers/PanelContainer.tsx";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { EmptyPreviewRender } from "@/pages/mainPage/components/contentRender/emptyRender.tsx";
import { RtfPreviewRender } from "@/pages/mainPage/components/contentRender/rtfRender.tsx";
import { PastyType } from "@/types";
import { TextPreviewRender } from "@/pages/mainPage/components/contentRender/textRender.tsx";
import { ImagePreviewRender } from "@/pages/mainPage/components/contentRender/imageRender.tsx";
import { MacScrollbar } from "mac-scrollbar";

export const PreviewPanel = observer(() => {
  const pastyStore = useStore(StoreNames.PastListStore);
  return (
    <PanelContainer>
      <div className="preview-panel-outer">
        <div className="preview-panel">
          <MacScrollbar>
            {pastyStore.selectedPasty === undefined && <EmptyPreviewRender />}
            {pastyStore.selectedPasty?.pastyType === PastyType.Text && (
              <TextPreviewRender pasty={pastyStore.selectedPasty} />
            )}
            {pastyStore.selectedPasty?.pastyType === PastyType.Rtf && (
              <RtfPreviewRender pasty={pastyStore.selectedPasty} />
            )}
            {pastyStore.selectedPasty?.pastyType === PastyType.Image && (
              <ImagePreviewRender pasty={pastyStore.selectedPasty} />
            )}
          </MacScrollbar>
        </div>
      </div>
    </PanelContainer>
  );
});
