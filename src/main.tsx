import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const path = window.location.pathname;
if (path === "/" || path.startsWith("/maxwell")) {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "video";
  link.href = "/video.mp4";
  link.type = "video/mp4";
  document.head.appendChild(link);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
