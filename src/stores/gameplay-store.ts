import AppStore from "./app-store";
import Engine from "../engine";

class GameplayStore {
	public constructor(private appStore: AppStore, private readonly engine: Engine) {}

	public togglePause() {
		this.engine.togglePause();
	}

	public get isGameActive() {
		return !this.engine.isPaused;
	}

	public get gameSpeed() {
		return this.engine.timer.gameSpeed;
	}

	public changeSpeed = (newSpeed: number) => {
		this.engine.timer.changeSpeed(newSpeed);
	};

	public get calendar() {
		return this.engine.calendar;
	}
}

export default GameplayStore;
