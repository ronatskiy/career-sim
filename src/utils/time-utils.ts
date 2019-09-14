import moment, { Moment } from "moment";

const SHORT_DATE_FORMATTER = "DD.MM.YYYY";

export function shortDate(date): string {
	return moment(date).format(SHORT_DATE_FORMATTER);
}

export function dateToString(date: Date | Moment) {
	return shortDate(date);
}

export function fromShortDate(shortDate: string) {
	return moment(shortDate, SHORT_DATE_FORMATTER);
}
