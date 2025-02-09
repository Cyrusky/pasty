import "normalize.css";
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
import { GlobalContainer } from "./libs/components/styledComponent";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <GlobalContainer>
          <Initiator />
          <TitleBar />
          <Router />
        </GlobalContainer>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
