import Engine from "../../engine";

class GameplayStore {
	public constructor(public readonly engine: Engine) {}

	public get calendar() {
		return this.engine.calendar;
	}

	public get isAutoTurnActive() {
		return this.engine.turnModel.isAutoTurnActive;
	}

	public get gameSpeed() {
		return this.engine.turnModel.autoTurnSpeed;
	}

	public changeSpeed = (newSpeed: number) => {
		this.engine.turnModel.changeAutoTurnSpeed(newSpeed);
	};

	public togglePause() {
		if (this.engine.isPaused) {
			this.engine.turnModel.startAutoTurn();
		} else {
			this.engine.turnModel.stopAutoTurn();
		}
	}

	public onNewGame = () => {
		const message = "Вы действительно хотите начать новую игру?\n\nВнимание! Весь прогресс будет утерян.";

		if (window.confirm(message)) {
			this.engine.startNewGame();
		}
	};
}

export default GameplayStore;
