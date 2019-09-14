import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Footer from "../footer";
import LeftSideBar from "./left-side-bar";
import RightSideBar from "./right-side-bar";
import MessageCenter from "../message-center";
import TaskList from "./task-list";
import Balance from "./balance";
import WorkList from "./work-list";
import { URL_ROUTES } from "../../routes";

function Home() {
	return <div />;
}

function App() {
	return (
		<Container className="app-layout" fluid>
			<Row tag="main" className="app-layout__main">
				<LeftSideBar />
				<Col className="p-0">
					<Container className="game-field" fluid>
						<Row>
							<Col>
								<Route exact path={URL_ROUTES.HOME} component={Home} />
								<Route path={URL_ROUTES.TASKS} component={TaskList} />
								<Route path={URL_ROUTES.BALANCE} component={Balance} />
								<Route path={URL_ROUTES.WORKS_MARKET} component={WorkList} />
							</Col>
						</Row>
						<Footer className="app-layout__footer" />
						<Row>
							<MessageCenter />
						</Row>
					</Container>
				</Col>
				<RightSideBar />
			</Row>
		</Container>
	);
}

export default observer(App);
