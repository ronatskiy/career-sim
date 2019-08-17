import { useObserver } from "mobx-react-lite";
import useGameplayStore from "./use-gameplay-store";

function useCalendarStore() {
	const gameplay = useGameplayStore();

	return useObserver(() => ({
		today: gameplay.calendar.day,
	}));
}

export default useCalendarStore;
