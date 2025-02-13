import "./imageRender.less";
import { FC } from "react";
import { RenderProps } from "@/types/props.ts";
// @ts-ignore
import Highlight from "react-highlight";

export const ImageRender: FC<RenderProps> = ({ pasty }) => {
  return (
    <div className="image-render-box">
      <img alt="" className={"image-thumbnail"} src={pasty.thumbnail} />
    </div>
  );
};

export const ImagePreviewRender: FC<RenderProps> = ({ pasty }) => {
  return (
    <div className="pasty-preview-render pasty-preview-render-text">
      <img alt="" className={"image"} src={pasty.content} />
    </div>
  );
};
