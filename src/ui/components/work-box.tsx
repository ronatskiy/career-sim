import React, { useRef, useState } from "react";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import uniqueId from "lodash/uniqueId";
import { ReactComponent as InfoIcon } from "../images/information.svg";

import "./work-box.scss";

const PREFIX = "work-box_";

function useGetUniqueId() {
	const targetIdRef = useRef(uniqueId(PREFIX));

	return targetIdRef.current;
}

function WorkBox({ work }) {
	const [isOpen, toggle] = useState(false);
	let targetId = useGetUniqueId();

	return (
		<div className="work-box">
			<div
				className="work-box__box"
				onClick={() => {
					toggle(!isOpen);
				}}
				onBlur={() => {
					toggle(false);
				}}
				outline
				color="info"
			>
				<strong>{work.name}</strong> <InfoIcon id={targetId} className="work-box__info-icon" />
			</div>
			<Popover className="work-box__popover" isOpen={isOpen} placement="bottom" target={targetId}>
				<PopoverHeader>{work.name}</PopoverHeader>
				<PopoverBody>
					<div>Позиция: {work.name}</div>
					<div>ЗП в месяц: {work.salary} $</div>
				</PopoverBody>
			</Popover>
		</div>
	);
}

export default WorkBox;
