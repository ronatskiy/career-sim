import React from "react";
import useAppStore from "../../stores/hooks/use-app-store";

const ACTIVE_TASKS = "Активные задачи";

export default function TaskList() {
	const appStore = useAppStore();

	return (
		<>
			<h4>{ACTIVE_TASKS}</h4>
			{appStore.tasks.map((task, index) => (
				<div>
					{index + 1}. {task.title} - {!task.isDone && "не"} завершен
				</div>
			))}
		</>
	);
}
