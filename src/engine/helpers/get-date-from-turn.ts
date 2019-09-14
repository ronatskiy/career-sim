import { Moment } from "moment";
import { fromShortDate } from "../../utils/time-utils";

export default function getDameFromTurn(startDate: string, turn: number): Moment {
	const date = fromShortDate(startDate);

	date.add(turn, "days");

	return date;
}
