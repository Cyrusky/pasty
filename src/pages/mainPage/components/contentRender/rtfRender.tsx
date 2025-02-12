import "./imageRender.less";
import { FC, useEffect, useMemo, useState } from "react";
import { RenderProps } from "@/types/props.ts";
// @ts-ignore
import Highlight from "react-highlight";
import { RTFJS } from "rtf.js";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { PastyType } from "@/types";
import { useWhyDidYouUpdate } from "ahooks";

const stringToArrayBuffer = (string: string) => {
  const buffer = new ArrayBuffer(string.length);
  const bufferView = new Uint8Array(buffer);
  for (let i = 0; i < string.length; i++) {
    bufferView[i] = string.charCodeAt(i);
  }
  return buffer;
};

const useRtf = (rtf: string) => {
  const [doms, setDoms] = useState<HTMLElement[]>([]);
  const doc = new RTFJS.Document(stringToArrayBuffer(rtf), {});

  useEffect(() => {
    doc.render().then((res) => {
      setDoms(res);
    });
  }, []);
  return doms;
};

export const RtfRender: FC<RenderProps> = ({ pasty }) => {
  const rtfDom = useRtf(pasty.content);
  const [texts, setTexts] = useState<string[]>([]);

  useEffect(() => {
    setTexts(
      rtfDom.map((node) => {
        return node.innerText;
      }),
    );
  }, [rtfDom]);

  return (
    <div className="rtf-render-box pasty-timeline-box">
      <div style={{ fontSize: 14 }}>
        {texts.map((text) => {
          return <div>{text}</div>;
        })}
      </div>
    </div>
  );
};

export const RtfPreviewRender: FC<RenderProps> = ({ pasty }) => {
  const rtfDom = useRtf(pasty.content);
  const pastyStore = useStore(StoreNames.PastListStore);

  useMemo(() => {
    if (pastyStore.selectedPasty?.pastyType !== PastyType.Rtf) {
      return;
    }
    let dom = document.getElementById(`pasty-preview-rtf-container`);
    if (!dom) return;
    dom.innerHTML = "";
    rtfDom.map((node) => {
      node.style.fontSize = "10px !important";
      dom?.appendChild(node);
    });
  }, [rtfDom]);

  useWhyDidYouUpdate("RtfPreviewRender", { rtfDom, pastyStore, pasty });

  return (
    <div className="pasty-preview-render pasty-preview-render-rtf">
      <div id={`pasty-preview-rtf-container`} />
    </div>
  );
};
