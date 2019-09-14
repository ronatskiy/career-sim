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
		const state = this.reloadStateAndInitTurnModel();

		this.calendar = new CalendarModel(state.startDate, this.turnModel);
		this.salaryCount = state.salaryCount;

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
			this.reloadStateAndInitTurnModel();
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
		this.saveState();
	}

	@action
	public addTask(task: Task) {
		this.tasks.push(task);
	}

	private getState(): GameState {
		return {
			turn: this.turnModel.turn,
			startDate: this.calendar.startDate,
			salaryCount: this.salaryCount,
		};
	}

	private saveState(state?: GameState) {
		this.storageService.saveGameState(state || this.getState());
	}

	private reloadStateAndInitTurnModel() {
		const state = this.storageService.loadGameState() || defaultState;

		if (!this.turnModel) {
			this.turnModel = new TurnModel(state.turn);
			this.turnModel.addListener("onBeforeChange", () => {
				this.saveState();
			});
		} else {
			this.turnModel.setTurn(state.turn);
		}

		return state;
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
