import { observable, action } from "mobx";
import Day from "../entities/day";

class CalendarModel {
	public day: Day = new Day();
	@observable
	public month: number = 1;
	@observable
	public year: number = 2020;

	@action
	public changeDay() {
		const { dayOfMonth } = this.day;

		if (dayOfMonth < 28) {
			this.day.dayOfMonth += 1;
		} else {
			this.day.dayOfMonth = 1;
			this.incrementMonth();
		}
	}

	@action
	private incrementMonth() {
		if (this.month < 12) {
			this.month += 1;
		} else {
			this.month = 1;
			this.year += 1;
		}
	}
}

export default CalendarModel;
