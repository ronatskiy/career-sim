import { computed } from "mobx";
import getDameFromTurn from "../helpers/get-date-from-turn";
import TurnModel from "./turn-model";

class CalendarModel {
	constructor(public readonly startDate: string, private turnModel: TurnModel) {}

	@computed
	public get currentDate() {
		return getDameFromTurn(this.startDate, this.turnModel.turn);
	}

	public get day(): number {
		return this.currentDate.date();
	}

	public get month(): number {
		return this.currentDate.month();
	}

	public get year(): number {
		return this.currentDate.year();
	}
}

export default CalendarModel;
