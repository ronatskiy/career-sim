import React from "react";
import { observer } from "mobx-react-lite";
import useCalendarStore from "../stores/hooks/use-calendar-store";

function Today() {
	const calendar = useCalendarStore();

	return <div>Day # {calendar.today.dayOfMonth}</div>;
}

export default observer(Today);
