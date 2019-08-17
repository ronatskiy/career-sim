import React from "react";
import { observer } from "mobx-react-lite";
import useGameplayStore from "../stores/hooks/use-gameplay-store";

function PlayButton() {
	const gameplay = useGameplayStore();
	const text = gameplay.isGameActive ? "Pause" : "Start";

	const onClick = React.useCallback(() => {
		gameplay.togglePause();
	}, [gameplay]);

	return (
		<button type="button" onClick={onClick}>
			{text}
		</button>
	);
}

export default observer(PlayButton);
