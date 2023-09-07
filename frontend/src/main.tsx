import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalStyles } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
=======
import { UserProvider } from "./Contexts/User/index.tsx";
import CarProvider from "./Contexts/Car/index.tsx";
>>>>>>> 9c9f6a5b057c4fb29c4afee5ffc4be90387ac5b5

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
<<<<<<< HEAD
      <App />
=======
      <CarProvider>
      <UserProvider>
        <App />
      </UserProvider>
      </CarProvider>
>>>>>>> 9c9f6a5b057c4fb29c4afee5ffc4be90387ac5b5
    </BrowserRouter>
  </React.StrictMode>
);
