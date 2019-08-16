import { observable } from "mobx";

class Day {
	@observable
	public dayOfMonth: number = 1;
}

export default Day;
