import "./rtfRender.less";
import { FC, useEffect, useMemo, useState } from "react";
import { RenderProps } from "@/types/props.ts";
// @ts-ignore
import Highlight from "react-highlight";
import { EMFJS, RTFJS, WMFJS } from "rtf.js";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { PastyType } from "@/types";
import { isWebDev } from "@/libs/utils/env.ts";

RTFJS.loggingEnabled(isWebDev);
WMFJS.loggingEnabled(isWebDev);
EMFJS.loggingEnabled(isWebDev);

const stringToArrayBuffer = (string: string) => {
  const buffer = new ArrayBuffer(string.length);
  const bufferView = new Uint8Array(buffer);
  for (let i = 0; i < string.length; i++) {
    bufferView[i] = string.charCodeAt(i);
  }
  return buffer;
};

const useRtf = (rtf: string) => {
  const [html, setHtml] = useState<string>("");
  const [text, setText] = useState<string[]>([]);

  useEffect(() => {
    const doc = new RTFJS.Document(stringToArrayBuffer(rtf), {});
    doc.render().then((res) => {
      setHtml(res.map((d) => d.innerHTML).join(""));
      setText(res.map((d) => d.innerText));
    });
  }, [rtf]);

  return { html, text };
};

export const RtfRender: FC<RenderProps> = ({ pasty }) => {
  const { text } = useRtf(pasty.content);

  return (
    <div className="rtf-render-box pasty-timeline-box">
      <div style={{ fontSize: 14 }}>
        {text.map((text, index) => {
          return <div key={index}>{text}</div>;
        })}
      </div>
    </div>
  );
};

export const RtfPreviewRender: FC<RenderProps> = ({ pasty }) => {
  const { html } = useRtf(pasty.content);
  const pastyStore = useStore(StoreNames.PastListStore);

  useMemo(() => {
    if (pastyStore.selectedPasty?.pastyType !== PastyType.Rtf) {
      return;
    }
    setTimeout(() => {
      let containerDom = document.getElementById(`pasty-preview-rtf-container`);
      if (!containerDom) return;
      containerDom.innerHTML = html;
    }, 10);
  }, [html]);

  return (
    <div className="pasty-preview-render pasty-preview-render-rtf">
      <div id={`pasty-preview-rtf-container`} />
    </div>
  );
};
