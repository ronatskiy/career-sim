import { observable, action } from "mobx";
import Timer from "./timer";
import Income from "../entities/income";
import Day from "../entities/day";

class CalendarModel {
	public day: Day = new Day();

	public changeDay() {
		const { dayOfMonth } = this.day;

		this.day.dayOfMonth = dayOfMonth < 28 ? dayOfMonth + 1 : 1;
	}
}

class GameEngine {
	constructor() {
		this.calendar = new CalendarModel();
		this.timer = new Timer(() => {
			console.log("tick at", new Date());
			this.calendar.changeDay();
		});
	}

	@action
	public add(income: Income) {
		this.incomes.push(income);
	}

	@observable
	public isPaused: boolean = true;

	public runGame() {}

	@action
	public togglePause() {
		if (this.isPaused) {
			this.timer.start();
		} else {
			this.timer.stop();
		}

		this.isPaused = !this.isPaused;
	}

	public calendar: CalendarModel;

	@observable
	private incomes: Array<Income> = [];

	public timer: Timer;
}

export default GameEngine;
