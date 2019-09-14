import Task from "./entities/task";

export interface GameState {
	turn: number;
	startDate: string;
	salaryCount: number;
}

export enum NotificationType {
	Info,
	NewTask,
}

export type Notification =
	| { type: NotificationType.NewTask; task: Task }
	| { type: NotificationType.Info; message: string };
