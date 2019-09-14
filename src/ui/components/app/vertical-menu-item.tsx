import React from "react";

import "./vertical-menu-item.scss";

interface Props {
	className?: string;
	active?: boolean;
	children: React.ReactNode;
	onClick?(): void;
}

export default function VerticalMenuItem({ className, active = false, children, onClick }: Props) {
	const classNames = `${className} vertical-menu-item${active ? " vertical-menu-item--active" : ""}`;

	return (
		<div className={classNames} onClick={onClick}>
			{children}
		</div>
	);
}
