import "./PastyItemIcons.less";
import { FC } from "react";
import { PastyModel } from "@/types";
import { MdDeleteOutline, MdOutlineContentCopy } from "react-icons/md";
import { FaRegPaste } from "react-icons/fa6";
import { TiPinOutline } from "react-icons/ti";
import clsx from "clsx";

interface PastyItemIconsProps {
  pasty: PastyModel;
}

const iconSize = 30;
export const PastyItemIcons: FC<PastyItemIconsProps> = ({ pasty }) => {
  return (
    <div className="render-tool-bar">
      <MdOutlineContentCopy size={iconSize / 2} className={"icons"} />
      <FaRegPaste size={iconSize / 2} className={"icons"} />
      <MdDeleteOutline size={iconSize / 2} className={"icons"} />
      <TiPinOutline
        size={iconSize / 2}
        className={clsx("icons", {
          "icons-active": pasty.pined,
        })}
      />
    </div>
  );
};
