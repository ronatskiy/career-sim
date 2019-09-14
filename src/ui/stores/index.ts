import Engine from "../../engine";
import AppStore from "./app-store";

export function createStore(engine: Engine) {
	const appStore = new AppStore(engine);

	return {
		appStore,
	};
}
