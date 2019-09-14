import React from "react";
import { observer } from "mobx-react-lite";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import useGameplayStore from "../../stores/hooks/use-gameplay-store";

function SpeedSelector() {
	const gameplay = useGameplayStore();
	const onChangeSpeed = (speed: number) => () => {
		gameplay.changeSpeed(speed);
	};

	return (
		<Pagination className="speed-selector">
			<PaginationItem active={gameplay.gameSpeed === 1}>
				<PaginationLink onClick={onChangeSpeed(1)}>x1</PaginationLink>
			</PaginationItem>
			<PaginationItem active={gameplay.gameSpeed === 2}>
				<PaginationLink onClick={onChangeSpeed(2)}>x2</PaginationLink>
			</PaginationItem>
			<PaginationItem active={gameplay.gameSpeed === 3}>
				<PaginationLink onClick={onChangeSpeed(3)}>x3</PaginationLink>
			</PaginationItem>
		</Pagination>
	);
}

export default observer(SpeedSelector);
