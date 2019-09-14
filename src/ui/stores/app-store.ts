import { computed } from "mobx";

import Engine from "../../engine";
import Work from "../../entities/work";
import GameplayStore from "./gameplay-store";
import TasksStore from "./tasks-store";

class AppStore {
	public readonly gameplay: GameplayStore;
	public readonly tasksStore: TasksStore;

	public constructor(private readonly engine: Engine) {
		this.gameplay = new GameplayStore(engine);
		this.tasksStore = new TasksStore(engine);

		this.engine.turnModel.addListener("onAfterChange", this.checkChallenge);
	}

	@computed
	public get incomes() {
		return this.engine.incomes.map(income => {
			return {
				text: income.description,
				value: income.income,
			};
		});
	}

	@computed
	public get payments() {
		return this.engine.properties.map(property => {
			return {
				text: property.type,
				value: property.payments,
			};
		});
	}

	@computed
	public get works(): Array<Work> {
		return [
			{ name: "Инженер", salary: 1000, description: "" },
			{ name: "Водопроводчик", salary: 300, description: "" },
		];
	}

	private checkChallenge = (turn: number) => {
		if (this.engine.challengesModel.hasAnyChallenge(turn)) {
			const challenges = this.engine.challengesModel.getAllChallenges(turn);

			for (const challenge of challenges) {
				alert(challenge.title);

				const task = this.engine.challengesModel.completeChallenge(challenge.challengeId);
				this.engine.addTask(task);
			}
		}
	};
}

export default AppStore;
