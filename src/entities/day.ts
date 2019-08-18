import { observable, computed } from "mobx";

class Day {
	@observable
	public dayOfMonth: number = 1;

	@computed
	public get isWorkingDay() {
		return (this.dayOfMonth + 1) % 7 === 0 || this.dayOfMonth % 7 === 0;
	}
}

export default Day;
