import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import PorfolioChi from "./PortfolioChi";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const gaScript = document.createElement("script");
gaScript.textContent =
  '<script async src="https://www.googletagmanager.com/gtag/js?id=G-8DP9PVKLQY"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "G-8DP9PVKLQY"); </script>';
document.head.append(gaScript);

root.render(
  <StrictMode>
    <PorfolioChi />
  </StrictMode>
);
