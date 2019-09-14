import React from "react";
import WorkBox from "../work-box";
import useAvailableWorks from "../../stores/hooks/use-available-works";

const AVAILABLE_VACANCIES = "Доступные вакансии";

function WorkList() {
	const works = useAvailableWorks();

	return (
		<div className="work-list">
			<h4>{AVAILABLE_VACANCIES}</h4>
			{works.map(work => (
				<WorkBox work={work} />
			))}
		</div>
	);
}

export default WorkList;
