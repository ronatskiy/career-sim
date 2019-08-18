import React from "react";
import { useObserver } from "mobx-react-lite";
import { Button } from "reactstrap";
import PlayButton from "../play-button";
import Today from "../today";
import SpeedSelector from "../speed-selector";

import "./index.scss";

interface Props {
	className: string;
}

function FinishTurn({ className }: { className: string }) {
	return <Button className={className}>Finish turn</Button>;
}

function Footer({ className }: Props) {
	return useObserver(() => (
		<footer className={`footer ${className}`}>
			<PlayButton />
			<Today />
			<div className="footer__speed-selector">
				<SpeedSelector />
			</div>
			<FinishTurn className="footer__finish" />
		</footer>
	));
}

export default Footer;
