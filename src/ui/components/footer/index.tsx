import React from "react";
import { useObserver } from "mobx-react-lite";
import { Row, Col } from "reactstrap";
import PlayButton from "./play-button";
import Today from "./today";
import SpeedSelector from "./speed-selector";

import "./index.scss";

interface Props {
	className: string;
}

function Footer({ className }: Props) {
	return useObserver(() => (
		<Row tag="footer" className={`footer ${className}`}>
			<Col xs="3">
				<PlayButton />
			</Col>
			<Col xs="2">
				<Today />
			</Col>
			<Col className="footer__speed-selector" xs="4">
				<SpeedSelector />
			</Col>
		</Row>
	));
}

export default Footer;
