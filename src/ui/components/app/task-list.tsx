import React from "react";
import useTasksStore from "../../stores/hooks/use-tasks-store";
import { useObserver } from "mobx-react-lite";

const ACTIVE_TASKS = "Активные задачи";

function TaskList() {
	const tasksStore = useTasksStore();

	return useObserver(() => (
		<>
			<h4>{ACTIVE_TASKS}</h4>
			{tasksStore.tasks.map((task, index) => (
				<div>
					{index + 1}. {task.title} - {!task.isDone && "не"} завершен
				</div>
			))}
		</>
	));
}

export default TaskList;
