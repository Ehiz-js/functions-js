window.prompt("Enter a name: ");
window.prompt("Enter another name: ");
function lovePercentage() {
	return Math.floor(Math.random() * 100 + 1);
}
love = lovePercentage();
if (love > 70) {
	alert(
		"Your love percentage is: " +
			love +
			"% " +
			"You love each other like Kanye loves Kanye"
	);
} else {
}
alert("Your love percentage is: " + love + "%");
