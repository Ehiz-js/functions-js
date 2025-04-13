function lifeInWeeks(age) {
	let ageLeft = 90 - age;
	let monthsLeft = ageLeft * 12;
	let weeksLeft = ageLeft * 52;
	let daysLeft = ageLeft * 365;
	console.log(
		`You have ${daysLeft} days, ${weeksLeft} and ${monthsLeft} months left.`
	);
}
lifeInWeeks(ageLeft);
