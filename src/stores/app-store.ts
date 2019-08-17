import Engine from "../engine";
import GameplayStore from "./gameplay-store";

class AppStore {
	public gameplay: GameplayStore;

	public constructor(private readonly engine: Engine) {
		this.gameplay = new GameplayStore(this, engine);
	}
}

export default AppStore;
