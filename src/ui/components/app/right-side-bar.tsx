import React from "react";
import { Col } from "reactstrap";

import VerticalMenuItem from "../vertical-menu/vertical-menu-item";
import TurnButton from "./turn-button";
import MeinMenuButton from "./main-menu-button";
import "./right-side-bar.scss";

export default function RightSideBar() {
	return (
		<Col className="app-layout__side-bar app-layout__side-bar--right right-side-bar" xs="auto" sm="auto">
			<VerticalMenuItem>
				<MeinMenuButton />
			</VerticalMenuItem>
			<VerticalMenuItem className="right-side-bar--turn-button">
				<TurnButton />
			</VerticalMenuItem>
		</Col>
	);
}
