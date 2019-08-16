import { useContext } from "react";
import { useObserver } from "mobx-react-lite";
import { storeContext } from "./index";
import AppStore from "./app-store";

function useAppStore(): AppStore {
	const store = useContext(storeContext);

	if (!store) {
		throw new Error("You have forgot to use StoreProvider, shame on you.");
	}

	return useObserver(() => store);
}

export default useAppStore;
