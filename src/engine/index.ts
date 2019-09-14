import { observable, action } from "mobx";
import { GameState } from "../types";
import StorageService from "../services/storage-service";
import Income from "../entities/income";
import Property from "../entities/property";
import Challenge from "../entities/challenge";
import Task, { Goal } from "../entities/task";
import Work from "../entities/work";
import CalendarModel from "./models/calendar-model";
import TurnModel from "./models/turn-model";
import ChallengesModel from "./models/challenges-model";

function getProperties(): Property[] {
	return [{ name: "", type: "room", payments: 1200 }];
}

function getIncomes(): Income[] {
	return [{ description: "Зарплата", income: 2000, regularity: "PerMonth", when: 28 }];
}

const defaultState: GameState = {
	turn: 0,
	startDate: "01.01.2020",
	salaryCount: 0,
	tasks: [],
};

class GameEngine {
	public turnModel: TurnModel;
	public calendar: CalendarModel;
	private salaryCount: number;
	public challengesModel: ChallengesModel = new ChallengesModel();

	@observable
	public incomes: Array<Income>;
	public properties: Array<Property>;

	@observable
	public tasks: Array<Task> = [];

	@observable
	public works: Array<Work> = [];

	constructor(private readonly storageService: StorageService) {
		const state = this.loadGameState();

		this.turnModel = new TurnModel(state.turn);
		this.turnModel.addListener("onBeforeChange", () => {
			this.saveState();
		});

		this.fromJs(state);

		this.calendar = new CalendarModel(state.startDate, this.turnModel);
		this.setupChallenges();

		this.properties = getProperties();
		this.incomes = getIncomes();
	}

	public get payments() {
		return this.properties.reduce((acc, prop) => {
			return acc + prop.payments;
		}, 0);
	}

	public get isPaused() {
		return !this.turnModel.isAutoTurnActive;
	}

	public startNewGame() {
		if (this.turnModel.turn > 0) {
			this.saveState(defaultState);
			const js = this.storageService.loadGameState() || defaultState;

			this.fromJs(js);
		}
	}

	public endGame() {}

	@action
	public addIncome(income: Income) {
		this.incomes.push(income);
	}

	public runGame() {
		if (this.isPaused) {
			this.turnModel.startAutoTurn();
		}
	}

	public exit() {
		this.saveState(this.toJs());
	}

	@action
	public addTask(task: Task) {
		this.tasks.push(task);
	}

	private toJs(): GameState {
		return {
			turn: this.turnModel.turn,
			startDate: this.calendar.startDate,
			salaryCount: this.salaryCount,
			tasks: this.tasks,
		};
	}

	@action
	private fromJs(state: GameState) {
		this.salaryCount = state.salaryCount;
		this.turnModel.setTurn(state.turn);

		for (let task of state.tasks) {
			this.addTask(new Task(task.title, new Goal(task.goal.milestone)));
		}
	}

	private saveState(state?: GameState) {
		this.storageService.saveGameState(state || this.toJs());
	}

	private loadGameState(): GameState {
		return this.storageService.loadGameState() || defaultState;
	}

	private setupChallenges() {
		this.challengesModel.addChallenge(
			new Challenge({
				challengeId: "challenge_1",
				title: "Ваши пассивные доходы должны превышать расходы",
				runOnTurn: 1,
				goal: new Goal(2, () => this.works.length > 0),
			}),
		);
		this.challengesModel.addChallenge(
			new Challenge({
				challengeId: "challenge_2",
				title: "Для начала Вы должны устроиться на 1 работу",
				runOnTurn: 1,
				goal: new Goal(2, () => this.works.length > 0),
			}),
		);
	}
}

export default GameEngine;
