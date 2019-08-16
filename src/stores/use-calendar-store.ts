import useGameplayStore from "./use-gameplay-store";

function useCalendarStore() {
	const gameplay = useGameplayStore();
	return {
		today: gameplay.calendar.day,
	};
}

export default useCalendarStore;
