import "./PastyTimeLineItem.less";
import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import { PastyModel, PastyType } from "@/types";
import { TextRender } from "@/pages/mainPage/components/contentRender/textRender.tsx";

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
  const current = Math.random() > 0.5;
  const [hms, setHms] = useState("");
  const [ymd, setYmd] = useState("");

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
      />
      <div className="timeline-right">
        <div className={"pasty-render"}>{getRender(pasty)}</div>
        <div className="render-tool-bar">123</div>
      </div>
    </div>
  );
};
