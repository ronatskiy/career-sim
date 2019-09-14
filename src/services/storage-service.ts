import { GameState } from "../types";

const KEY = "CAREER_SIM";

export default class StorageService {
	public saveGameState(state: GameState) {
		const gameRawData = JSON.stringify(state);
		localStorage.setItem(KEY, gameRawData);
	}

	public loadGameState(): GameState | null {
		const gameRawData = localStorage.getItem(KEY);

		if (gameRawData === null) {
			return null;
		}

		return JSON.parse(gameRawData);
	}
}
