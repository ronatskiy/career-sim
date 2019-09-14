import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./vendors/index";
import "./ui/styles.scss";

import StorageService from "./services/storage-service";
import { StoreProvider, App } from "./ui";
import Engine from "./engine";

const storageService = new StorageService();
const gameEngine = new Engine(storageService);

function Root() {
	return (
		<Router>
			<StoreProvider engine={gameEngine}>
				<App />
			</StoreProvider>
		</Router>
	);
}

render(<Root />, document.getElementById("root"));

window.addEventListener("beforeunload", () => {
	gameEngine.exit();
});
