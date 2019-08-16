import * as React from "react";
import { render } from "react-dom";

import PlayButton from "./components/play-button";
import Today from "./components/today";
import SpeedSelector from "./components/speed-selector";
import { StoreProvider } from "./stores";
import Engine from "./engine";

import "./styles.css";

function App() {
	return (
		<StoreProvider engine={new Engine()}>
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

const rootElement = document.getElementById("root");

render(<App />, rootElement);
