import React, { ReactNode } from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import capitalize from "lodash/capitalize";

interface Props {
	children?: ReactNode;
	title: string;
}

function Paper({ children, title }: Props) {
	return (
		<Card body>
			<CardTitle>{capitalize(title)}</CardTitle>
			{children && <CardText>{children}</CardText>}
		</Card>
	);
}

export default Paper;
