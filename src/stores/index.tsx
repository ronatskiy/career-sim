import * as React from "react";
import { useLocalStore } from "mobx-react-lite";
import Engine from "../engine";
import AppStore from "./app-store";

function createStore(engine: Engine) {
	return {
		app: new AppStore(engine),
	};
}

export const storeContext = React.createContext<AppStore | null>(null);

interface Props {
	engine: Engine;
	children: React.ReactNode;
}

export const StoreProvider = ({ children, engine }: Props) => {
	const store = useLocalStore(createStore, engine);

	return <storeContext.Provider value={store.app}>{children}</storeContext.Provider>;
};
