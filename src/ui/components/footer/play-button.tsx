import React from "react";
import { useObserver } from "mobx-react-lite";
import { Button } from "reactstrap";

import useGameplayStore from "../../stores/hooks/use-gameplay-store";

function PlayButton() {
	const gameplay = useGameplayStore();
	const text = gameplay.isAutoTurnActive ? "Pause" : "Start";
	const onClick = () => {
		gameplay.togglePause();
	};

	return useObserver(() => (
		<Button color="primary" onClick={onClick}>
			{text}
		</Button>
	));
}

export default PlayButton;
