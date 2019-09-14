import AppStore from "../app-store";
import { useStoreContext } from "../../contexts/store-context";

function useAppStore(): AppStore {
	const store = useStoreContext();

	if (!store) {
		throw new Error("You have forgot to use StoreProvider.");
	}

	return store;
}

export default useAppStore;
