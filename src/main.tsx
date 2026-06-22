import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const path = window.location.pathname;
if (path === "/" || path.startsWith("/v")) {
  const video = path === "/v2" ? "/video2.mp4" : "/video.mp4";
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "video";
  link.href = video;
  link.type = "video/mp4";
  document.head.appendChild(link);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
