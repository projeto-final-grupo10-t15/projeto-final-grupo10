import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalStyles } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Contexts/User/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
