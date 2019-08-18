import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

import { StoreProvider } from "./contexts/store-context";
import Footer from "./components/footer";
import Engine from "./engine";

const engine = new Engine();

function App() {
	return (
		<StoreProvider engine={engine}>
			<div className="app-layout">
				<main className="app-layout__main" />
				<Footer className="app-layout__footer" />
			</div>
		</StoreProvider>
	);
}

render(<App />, document.getElementById("root"));
