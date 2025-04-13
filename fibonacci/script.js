function fibonacciGenerator(n) {
	//Do NOT change any of the code above 👆

	//Write your code here:
	let fibonacciArray = [];
	for (var length = fibonacciArray.length; length <= n; length++) {
		if (length === 0) {
			fibonacciArray.push();
		} else if (length === 1) {
			fibonacciArray.push(0);
		} else if (length === 2) {
			fibonacciArray.push(1);
		} else {
			fibonacciArray.push(
				fibonacciArray[length - 2] + fibonacciArray[length - 3]
			);
		}
	}
	//Return an array of fibonacci numbers starting from 0.
	return fibonacciArray;
	//Do NOT change any of the code below 👇
}
console.log(fibonacciGenerator(15));
