function whosPaying(names) {
	let length = names.length;
	let randomIndex = Math.floor(Math.random() * length);
	let randomName = names[randomIndex];
	return `${randomName} is going to buy lunch today`;
}
let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(names));
