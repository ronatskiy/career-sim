import React from "react";
import { observer } from "mobx-react-lite";
import useGameplayStore from "../stores/use-gameplay-store";

function SpeedSelector() {
	const gameplay = useGameplayStore();

	return (
		<button type="button" onClick={gameplay.changeSpeed}>
			x {gameplay.gameSpeed}
		</button>
	);
}

export default observer(SpeedSelector);
