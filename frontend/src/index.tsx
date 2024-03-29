import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import registerIcons from "./config/fa.config";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./assets/style/main.scss";

registerIcons();

const appElement = (
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);

const container = document.getElementById("root")!;
const hasChildNodes = !!container?.hasChildNodes();

hasChildNodes
	? hydrateRoot(container, appElement)
	: createRoot(container).render(appElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
