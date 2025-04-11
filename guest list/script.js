guestList = [
	"Luffy",
	"Zoro",
	"Sanji",
	"Nami",
	"Usopp",
	"Franky",
	"Robin",
	"Brook",
	"Chopper",
	"Jimbei",
];
guestName = window.prompt("Enter your name: ");

if (guestList.includes(guestName)) {
	alert("You are on the guest list! Congrats!");
} else {
	alert("You are not on the guest list! oops!");
}
