//FIZZBUZZ
let output = [];
let number = 1;

function fizzBuzz() {
	while (number <= 100) {
		if (number % 3 === 0 && number % 5 === 0) {
			output.push("FizzBuzz");
		} else if (number % 3 === 0) {
			output.push("Fizz");
		} else if (number % 5 === 0) {
			output.push("Buzz");
		} else {
			output.push(number);
		}
		number++;
	}
	console.log(output);
}
fizzBuzz();
