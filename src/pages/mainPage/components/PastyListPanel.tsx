import { observer } from "mobx-react-lite";
import { PanelContainer } from "@/libs/components/containers/PanelContainer.tsx";
import { PastyTimeLine } from "@/pages/mainPage/components/PastyTimeLine";

export const PastyListPanel = observer(() => {
  return (
    <PanelContainer>
      <PastyTimeLine />
    </PanelContainer>
  );
});
