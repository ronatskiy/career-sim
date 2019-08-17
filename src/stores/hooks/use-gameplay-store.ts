import { useObserver } from "mobx-react-lite";
import useAppStore from "./use-app-store";

function useGameplayStore() {
	const appStore = useAppStore();

	return useObserver(() => appStore.gameplay);
}

export default useGameplayStore;
