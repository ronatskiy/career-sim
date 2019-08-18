import { observable, action } from "mobx";
import Timer from "./timer";
import Income from "../entities/income";
import CalendarModel from "./calendar-model";

class GameEngine {
	public calendar: CalendarModel;
	public timer: Timer;
	@observable
	private incomes: Array<Income> = [];

	constructor() {
		this.calendar = new CalendarModel();
		this.timer = new Timer(() => {
			this.calendar.changeDay();
		});
	}

	get isPaused() {
		return this.timer.isPaused;
	}

	@action
	public add(income: Income) {
		this.incomes.push(income);
	}

	public runGame() {
		if (this.isPaused) {
			this.timer.start();
		}
	}

	@action
	public togglePause() {
		if (this.timer.isPaused) {
			this.timer.start();
		} else {
			this.timer.stop();
		}
	}
}

export default GameEngine;
