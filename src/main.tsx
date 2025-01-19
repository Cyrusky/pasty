import "normalize.css";
import "tailwindcss/tailwind.css";
import "reflect-metadata";
import { BrowserRouter } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "@/components/providers/ContextProvider.tsx";
import { Router } from "@/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
