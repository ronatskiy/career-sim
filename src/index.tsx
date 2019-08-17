import React from "react";
import { render } from "react-dom";

import { StoreProvider } from "./contexts/store-context";
import PlayButton from "./components/play-button";
import Today from "./components/today";
import SpeedSelector from "./components/speed-selector";
import Engine from "./engine";

import "./styles.css";

const engine = new Engine();

function App() {
	return (
		<StoreProvider engine={engine}>
			<div className="App">
				<h1>Hello CodeSandbox</h1>
				<h2>Start editing to see some magic happen!</h2>
				<PlayButton />
				<Today />
				<SpeedSelector />
			</div>
		</StoreProvider>
	);
}

render(<App />, document.getElementById("root"));
