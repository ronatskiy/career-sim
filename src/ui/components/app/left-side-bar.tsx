import React from "react";
import { Col } from "reactstrap";
import { NavLink } from "react-router-dom";

import { ReactComponent as MoneyBagIcon } from "../../images/money-bag.svg";
import { ReactComponent as TaskListIcon } from "../../images/task-list.svg";
import { ReactComponent as ManagerIcon } from "../../images/manager.svg";
import { URL_ROUTES } from "../../routes";

import "./vertical-menu-item.scss";

export default function LeftSideBar() {
	return (
		<Col className="app-layout__side-bar app-layout__side-bar--left" xs="auto" sm="auto">
			<NavLink activeClassName="vertical-menu-item--active" className="vertical-menu-item" to={URL_ROUTES.TASKS}>
				<TaskListIcon />
			</NavLink>
			<NavLink
				activeClassName="vertical-menu-item--active"
				className="vertical-menu-item"
				to={URL_ROUTES.BALANCE}
			>
				<MoneyBagIcon />
			</NavLink>
			<NavLink
				activeClassName="vertical-menu-item--active"
				className="vertical-menu-item"
				to={URL_ROUTES.WORKS_MARKET}
			>
				<ManagerIcon />
			</NavLink>
		</Col>
	);
}
