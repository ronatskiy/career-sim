import { observable, action, computed } from "mobx";

const BASE_TIMEOUT = 1000; // 1 sec

class Timer {
	constructor(private readonly onTick: () => void) {}

	@observable
	private mainLoopTimer: number | null = null;

	@observable
	public gameSpeed: number = 1;

	@computed
	public get isPaused() {
		return this.mainLoopTimer === null;
	}

	@action
	public start() {
		if (!this.mainLoopTimer) {
			this.mainLoopTimer = window.setInterval(this.onTick, this.timeout);
		}
	}

	@action
	public stop() {
		if (this.mainLoopTimer) {
			window.clearInterval(this.mainLoopTimer);
			this.mainLoopTimer = null;
		}
	}

	@action
	public changeSpeed(newSpeed?: number) {
		this.stop();
		if (newSpeed) {
			this.gameSpeed = newSpeed;
		} else {
			this.gameSpeed = this.gameSpeed < 4 ? this.gameSpeed + 1 : 1;
		}

		this.start();
	}

	private get timeout() {
		return BASE_TIMEOUT / this.gameSpeed;
	}
}

export default Timer;
