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

dayJs.locale("zh-cn");
dayJs.extend(relativeTime);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <div className="global-container">
          <Initiator />
          <TitleBar />
          <Router />
        </div>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
