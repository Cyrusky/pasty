import "./index.less";
import { observer } from "mobx-react-lite";
import { PastyTimeLineItem } from "@/pages/mainPage/components/PastyTimeLine/PastyTimeLineItem.tsx";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { PastyModel } from "@/types";

export const PastyTimeLine = observer(() => {
  const pastyStore = useStore(StoreNames.PastListStore);

  const handleClick = (pasty: PastyModel) => {
    pastyStore.setSelectPasty(pasty);
  };

  return (
    <div className="timeline-wrapper">
      <div className="timeline">
        {pastyStore.pasty.map((pasty, index) => (
          <PastyTimeLineItem
            key={pasty.id}
            index={index}
            pasty={pasty}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
});
