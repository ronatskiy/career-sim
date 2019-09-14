import { useObserver } from "mobx-react-lite";
import useAppStore from "./use-app-store";

function useTasksStore() {
	const appStore = useAppStore();

	return useObserver(() => appStore.tasksStore);
}

export default useTasksStore;
