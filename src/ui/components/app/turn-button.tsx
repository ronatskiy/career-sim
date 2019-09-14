import React, { useCallback } from "react";
import useGameplayStore from "../../stores/hooks/use-gameplay-store";
import { ReactComponent as DicesIcon } from "../../images/dice.svg";

interface Props {
	className?: string;
}

function TurnButton({ className }: Props) {
	const gameplay = useGameplayStore();
	const onClick = useCallback(() => {
		gameplay.engine.turnModel.nextTurn();
	}, [gameplay.engine.turnModel]);

	return <DicesIcon className={className} onClick={onClick} />;
}

export default TurnButton;
