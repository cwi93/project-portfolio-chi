import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import PorfolioChi from "./PortfolioChi";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<PorfolioChi />
	</StrictMode>
);
