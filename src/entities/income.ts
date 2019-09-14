interface Income {
	income: number;
	regularity: "PerDay" | "PerMonth" | "Once";
	when: number; // day of month
	description: string;
}

export default Income;
