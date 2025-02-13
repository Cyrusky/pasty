import "./PastyTimeLineItem.less";
import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import { ConfigKeys, PastyModel, PastyType } from "@/types";
import { TextRender } from "@/pages/mainPage/components/contentRender/textRender.tsx";
import { PastyItemIcons } from "@/pages/mainPage/components/PastyTimeLine/PastyItemIcons.tsx";
import { ImageRender } from "@/pages/mainPage/components/contentRender/imageRender.tsx";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { Locales } from "@/libs/constants/configs.ts";
import { RtfRender } from "@/pages/mainPage/components/contentRender/rtfRender.tsx";

interface TimeLineItemProps {
  index: number;
  pasty: PastyModel;
  onClick: (pasty: PastyModel) => void;
}
export const PastyTimeLineItem: FC<TimeLineItemProps> = ({
  index,
  pasty,
  onClick,
}) => {
  const configStore = useStore(StoreNames.Configs);
  const current = Math.random() > 0.5;
  const [hms, setHms] = useState("");
  const [ymd, setYmd] = useState("");

  const testConfig = () => {
    if (configStore.getConfigByKey(ConfigKeys.AppLocal) === Locales.zh_CN) {
      configStore.updateConfig({
        key: ConfigKeys.AppLocal,
        value: Locales.en_US,
      });
    } else {
      configStore.updateConfig({
        key: ConfigKeys.AppLocal,
        value: Locales.zh_CN,
      });
    }
  };

  useEffect(() => {
    const now = new Date();
    const updatedAt = new Date(pasty.updatedAt);
    const time = dayjs(updatedAt);

    if (now.getTime() - updatedAt.getTime() < 1000 * 60 * 60 * 24) {
      setHms(time.fromNow());
    } else {
      setHms(time.format("HH:mm:ss"));
    }
    setYmd(time.format("YYYY-MM-DD"));
  }, []);

  const getRender = (pasty: PastyModel) => {
    switch (pasty.pastyType) {
      case PastyType.Text:
        return <TextRender pasty={pasty} />;
      case PastyType.Image:
        return <ImageRender pasty={pasty} />;
      case PastyType.Rtf:
        return <RtfRender pasty={pasty} />;
      default:
        return <div></div>;
    }
  };

  return (
    <div
      className="timeline-item"
      onClick={() => {
        onClick(pasty);
      }}
    >
      <div className="timeline-left">
        <div className="number">{index + 1}</div>
        <div className="time">
          <div className="hms">{hms}</div>
          <div className="ymd">{ymd}</div>
        </div>
      </div>
      <div
        className={clsx("timeline-dot", {
          "timeline-dot-current": current,
        })}
        onClick={testConfig}
      />
      <div className="timeline-right">
        <div className={"pasty-render"}>{getRender(pasty)}</div>
        <PastyItemIcons pasty={pasty} />
      </div>
    </div>
  );
};
