import React from "react";
import { observer } from "mobx-react-lite";
import { Button } from "reactstrap";

import useGameplayStore from "../stores/hooks/use-gameplay-store";

function PlayButton() {
	const gameplay = useGameplayStore();
	const text = gameplay.isGameActive ? "Pause" : "Start";
	const onClick = () => {
		gameplay.togglePause();
	};

	return (
		<Button color="primary" onClick={onClick}>
			{text}
		</Button>
	);
}

export default observer(PlayButton);
