interface Property {
	name: string;
	type: "room" | "apartment" | "house" | "estate" | "condominium";
	payments: number;
}

export default Property;
