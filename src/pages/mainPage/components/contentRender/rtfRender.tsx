import "./imageRender.less";
import { FC } from "react";
import { RenderProps } from "@/types/props.ts";
// @ts-ignore
import Highlight from "react-highlight";
import ImageThumbnail from "@/assets/images/thunbmail.png";

export const ImageRender: FC<RenderProps> = ({ pasty }) => {
  return (
    <div className="image-render-box">
      <img className={"image-thumbnail"} src={ImageThumbnail} />
    </div>
  );
};

export const ImagePreviewRender: FC<RenderProps> = ({ pasty }) => {
  return (
    <div className="pasty-preview-render pasty-preview-render-text">
      <img className={"image"} src={pasty.content} />
    </div>
  );
};
