import { useObserver } from "mobx-react-lite";
import useAppStore from "./use-app-store";

function useAvailableWorks() {
	const appStore = useAppStore();

	return useObserver(() => appStore.works);
}

export default useAvailableWorks;
