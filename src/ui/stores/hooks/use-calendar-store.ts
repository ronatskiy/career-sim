import { useObserver } from "mobx-react-lite";
import useGameplayStore from "./use-gameplay-store";
import { shortDate } from "../../../utils/time-utils";

function useCalendarStore() {
	const gameplay = useGameplayStore();

	return useObserver(() => ({
		todayFormatted: shortDate(gameplay.calendar.currentDate),
	}));
}

export default useCalendarStore;
