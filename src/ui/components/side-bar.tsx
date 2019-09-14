import React, { useState, useCallback, ReactNode } from "react";
import "./side-bar.scss";

interface Props {
	title: string;
	children: ReactNode;
}

function SideBar({ title, children }: Props) {
	const [isOpen, toggleOpen] = useState(false);
	const onToggleOpen = useCallback(() => {
		toggleOpen(!isOpen);
	}, [isOpen]);

	const className = `side-bar ${isOpen && "side-bar--open"}`;

	return (
		<div className={className}>
			<div className="side-bar__title" onClick={onToggleOpen}>
				{title}
			</div>
			{isOpen && <div className="side-bar__content">{children}</div>}
		</div>
	);
}

export default SideBar;
