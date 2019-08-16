import useAppStore from "./use-app-store";

function useGameplayStore() {
	const appStore = useAppStore();

	return appStore.gameplay;
}

export default useGameplayStore;
