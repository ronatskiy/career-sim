import { computed } from "mobx";
import AppStore from "./app-store";
import Engine from "../engine";

class GameplayStore {
	public constructor(private readonly engine: Engine, private appStore: AppStore) {}

	public togglePause() {
		this.engine.togglePause();
	}

	@computed
	public get isGameActive() {
		return !this.engine.isPaused;
	}

	get gameSpeed() {
		return this.engine.timer.gameSpeed;
	}

	changeSpeed = () => {
		this.engine.timer.changeSpeed();
	};

	get calendar() {
		return this.engine.calendar;
	}
}

export default GameplayStore;
