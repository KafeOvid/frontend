import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // ← import App

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />   {/* Now routing will work */}
  </StrictMode>
);
