class Task {
	public constructor(public readonly title: string, public goal: Goal) {}

	public isGoalAchived() {
		return this.goal.isGoalAchived();
	}

	public isDone(turn: number) {
		return turn < this.goal.milestone && this.goal.isGoalAchived();
	}

	public isFailed(turn: number) {
		return !this.isDone(turn);
	}
}

export class Goal {
	constructor(public milestone: number, public isGoalAchived: () => boolean) {}
}

export default Task;
