import "normalize.css";
import "mac-scrollbar/dist/mac-scrollbar.css";
import "reflect-metadata";
import "./main.css";
import "./i18n";
import { BrowserRouter } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "@/libs/components/providers/ContextProvider.tsx";
import { Router } from "@/router";
import { Initiator } from "@/libs/components/initiators";
import { TitleBar } from "@/libs/components/TitleBar";
import dayJs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
import { isWebDev } from "@/libs/utils/env.ts";

dayJs.locale("zh-cn");
dayJs.extend(relativeTime);

const colors = [
  "primary",
  "primary-content",
  "secondary",
  "secondary-content",
  "accent",
  "accent-content",
  "neutral",
  "neutral-content",
  "base-100",
  "base-200",
  "base-300",
  "base-content",
  "info",
  "info-content",
  "success",
  "success-content",
  "warning",
  "warning-content",
  "error",
  "error-content",
];

const colorBoxSize = 20;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        {isWebDev && (
          <div
            style={{
              position: "fixed",
              width: colorBoxSize,
              height: "100vh",
              left: colorBoxSize,
              top: colorBoxSize,
              display: "flex",
              flexFlow: "column nowrap",
              gap: 10,
            }}
          >
            {colors.map((color) => {
              return (
                <div
                  key={color}
                  style={{
                    backgroundColor: `var(--color-${color})`,
                    width: colorBoxSize * 3,
                    height: colorBoxSize,
                    fontSize: 10,
                    whiteSpace: "nowrap",
                    padding: 3,
                    overflow: "hidden",
                  }}
                >{`--color-${color}`}</div>
              );
            })}
          </div>
        )}
        <div className="global-container">
          <Initiator />
          <TitleBar />
          <Router />
        </div>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
