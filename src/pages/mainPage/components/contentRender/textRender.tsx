import { FC } from "react";
import { RenderProps } from "@/types/props.ts";
// @ts-ignore
import Highlight from "react-highlight";

export const TextRender: FC<RenderProps> = ({ pasty }) => {
  return (
    <div className="pasty-render-text">{pasty.content.substring(0, 100)}</div>
  );
};

export const TextPreviewRender: FC<RenderProps> = ({ pasty }) => {
  return (
    <div className="pasty-preview-render pasty-preview-render-text">
      {pasty.content}
    </div>
  );
};
