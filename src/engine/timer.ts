import { observable, action } from "mobx";

class Timer {
	constructor(private readonly onTick: () => void) {}

	private mainLoopTimer: number | null = null;

	@observable
	public gameSpeed: number = 1;

	start() {
		this.mainLoopTimer = window.setInterval(this.onTick, 1000 / this.gameSpeed);
	}

	stop() {
		if (this.mainLoopTimer) {
			window.clearInterval(this.mainLoopTimer);
		}
	}

	@action
	changeSpeed() {
		this.stop();
		this.gameSpeed = this.gameSpeed < 4 ? this.gameSpeed + 1 : 1;
		this.start();
	}
}

export default Timer;
