import { minimize } from "@/libs/components/TitleBar/utils.ts";
import { FC } from "react";
import { GiPin } from "react-icons/gi";

export const WindowButtons: FC = () => {
  return (
    <div className="button-container">
      <div className={"button button-active"} onClick={minimize}>
        <GiPin />
      </div>
    </div>
  );
};
