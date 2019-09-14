import Task, { Goal } from "./task";

interface Deps {
	challengeId: string;
	title: string;
	runOnTurn: number;
	goal: Goal;
}

export default class Challenge {
	public readonly challengeId: string;
	public readonly title: string;
	public readonly runOnTurn: number;
	private readonly goal: Goal;

	public constructor({ challengeId, title, runOnTurn, goal }: Deps) {
		this.challengeId = challengeId;
		this.title = title;
		this.runOnTurn = runOnTurn;
		this.goal = goal;
	}

	public onComplete(_decision) {
		return new Task(this.title, this.goal);
	}
}
