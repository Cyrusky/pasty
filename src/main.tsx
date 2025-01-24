import "normalize.css";
import "reflect-metadata";
import "tailwindcss/tailwind.css";
import "./main.css";
import "./libs/i18n";
import { BrowserRouter } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "@/libs/components/providers/ContextProvider.tsx";
import { Router } from "@/router";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Container>
          <Router />
        </Container>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
