import { useObserver } from "mobx-react-lite";
import useGameplayStore from "./use-gameplay-store";

function useCalendarStore() {
	const gameplay = useGameplayStore();

	return useObserver(() => ({
		day: gameplay.calendar.day.dayOfMonth,
		month: gameplay.calendar.month,
		year: gameplay.calendar.year,
		today: gameplay.calendar.day,
	}));
}

export default useCalendarStore;
