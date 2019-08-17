import { useContext } from "react";

import AppStore from "../app-store";
import { storeContext } from "../../contexts/store-context";

function useAppStore(): AppStore {
	const store = useContext(storeContext);

	if (!store) {
		throw new Error("You have forgot to use StoreProvider, shame on you.");
	}

	return store;
}

export default useAppStore;
