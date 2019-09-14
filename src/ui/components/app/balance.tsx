import React from "react";
import { useObserver } from "mobx-react-lite";
import useAppStore from "../../stores/hooks/use-app-store";

const INCOME = "Доходы";
const PAYMENTS = "Расходы";
const ACCOUNT_BALANCE = "Баланс";

function Balance() {
	const appStore = useAppStore();

	return useObserver(() => (
		<div>
			<strong>{INCOME}</strong>
			<div>
				{appStore.incomes.map(({ text, value }) => (
					<div key={text}>
						{text}: {value}$
					</div>
				))}
			</div>

			<strong>{PAYMENTS}</strong>
			<div>
				{appStore.payments.map(({ text, value }) => (
					<div key={text}>
						{text}: {value}$
					</div>
				))}
			</div>

			<strong>{ACCOUNT_BALANCE}</strong>
			<div />
		</div>
	));
}

export default Balance;
