import { computed } from "mobx";
import Engine from "../../engine";

class TasksStore {
	public constructor(public readonly engine: Engine) {}

	@computed
	public get tasks() {
		return this.engine.tasks.map(task => {
			return {
				title: task.title,
				isDone: task.isDone(this.engine.turnModel.turn),
			};
		});
	}
}

export default TasksStore;
