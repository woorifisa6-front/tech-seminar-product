import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import React from "react";
import "./styles/tokens.css";
import "./styles/globals.css";
import "./styles/ui.css";
import router from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
