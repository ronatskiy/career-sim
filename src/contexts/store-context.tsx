import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { createStore } from "../stores";
import AppStore from "../stores/app-store";
import Engine from "../engine";

export const storeContext = React.createContext<AppStore | null>(null);

interface Props {
	engine: Engine;
	children: React.ReactNode;
}

export const StoreProvider = ({ children, engine }: Props) => {
	const store = useLocalStore(createStore, engine);

	return <storeContext.Provider value={store.appStore}>{children}</storeContext.Provider>;
};
