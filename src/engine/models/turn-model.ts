import { observable, computed, action } from "mobx";
import Timer from "../timer";

class EventsHub {
	public addListener(type: string, handler: (d) => void) {
		document.addEventListener(type, ({ detail }: CustomEvent) => handler(detail));
	}

	public dispatch(type: string, detail: {}) {
		document.dispatchEvent(new CustomEvent(type, { detail: detail }));
	}
}

type EVENTS = "onBeforeChange" | "onAfterChange";

export default class TurnModel {
	@observable
	private currentTurn: number;
	private timer: Timer;
	private eventHub = new EventsHub();

	constructor(currentTurn: number) {
		this.currentTurn = currentTurn;

		this.timer = new Timer(() => {
			this.nextTurn();
		});
	}

	@action
	setTurn(turn: number) {
		this.currentTurn = turn;
	}

	@computed
	public get turn() {
		return this.currentTurn;
	}

	@action
	public nextTurn() {
		this.dispatch("onBeforeChange", this.currentTurn);

		this.currentTurn++;

		this.eventHub.dispatch("onAfterChange", this.currentTurn);
	}

	public get isAutoTurnActive() {
		return this.timer.isActive;
	}

	public startAutoTurn() {
		this.timer.start();
	}

	public stopAutoTurn() {
		this.timer.stop();
	}

	public get autoTurnSpeed() {
		return this.timer.gameSpeed;
	}

	public changeAutoTurnSpeed(newSpeed: number) {
		this.timer.changeSpeed(newSpeed);
	}

	public addListener(type: EVENTS, handler: (turn: number) => void) {
		this.eventHub.addListener(type, handler);
	}

	private dispatch(type: EVENTS, turn: number) {
		this.eventHub.dispatch(type, turn);
	}
}
