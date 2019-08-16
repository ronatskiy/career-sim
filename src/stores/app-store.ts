import Engine from "../engine";
import GameplayStore from "./gameplay-store";

class AppStore {
	public constructor(private readonly engine: Engine) {
		this.gameplay = new GameplayStore(engine);
	}
	public gameplay: GameplayStore;
}

export default AppStore;
