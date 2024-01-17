// Calculate the Number of Days Between Two Dates
// https://hackernoon.com/top-three-coding-challenges-for-mid-level-javascript-developers

// format DD/MM/YY
let date1 = "08/10/2021";
let date2 = "09/11/2021";
// Answer: 32

const formatDDMMYYYYDate = (date: string) => {
	// JS wont format these dates correctly, we need to arrange them into a better format
	const dateComponents = date.split("/");
	return new Date(
		`${dateComponents[2]}-${dateComponents[1]}-${dateComponents[0]}`
	);
};

const daysBetweenDates = (date1: Date, date2: Date) => {
	let newTime :number = date1.getTime() - date2.getTime();
	// If newTime is negative, let's flip it
	newTime < 0 ? (newTime = newTime * -1) : null;
	const timeSinceEpochDays = newTime / (24 * 60 * 60 * 1000); // hours per day * mins per hour * secs per min * milliseconds
	return timeSinceEpochDays;
};

console.log(
	`${daysBetweenDates(formatDDMMYYYYDate(date1), formatDDMMYYYYDate(date2))}`
);
