import React, { useState } from "react";
import { Toast, ToastHeader, ToastBody } from "reactstrap";
import { Notification, NotificationType } from "../../../types";
import "./index.scss";

function renderNotification(notification: Notification) {
	let header = "";
	let body = "";

	switch (notification.type) {
		case NotificationType.NewTask: {
			header = "Новое задание";
			body = notification.task.title;
			break;
		}
		case NotificationType.Info: {
			body = notification.message;
			break;
		}
		default: {
			body = "<Пустое сообщение>";
		}
	}

	return (
		<Toast className="message-center__notification">
			{header && <ToastHeader>{header}</ToastHeader>}
			<ToastBody>{body}</ToastBody>
		</Toast>
	);
}

function MessageCenter() {
	const [notifications] = useState<Array<Notification>>([]);

	return <div className="message-center">{notifications.map(renderNotification)}</div>;
}

export default MessageCenter;
