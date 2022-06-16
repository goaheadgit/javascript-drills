// You need to handle the following mathematical operations:
//     Addition
//     Subtraction
//     Multiplication
//     Division
//     Square root
// We’ve provided some code that allows you to access the numbers and the math symbol that the user provided on the command line. Review the code carefully in calc.js. Research any syntax that looks unfamiliar to you.

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log('mathSymbol', mathSymbol);
    console.log('num1', num1);
    console.log('num2', num2);

	if(mathSymbol === "+") {
		console.log(num1 + num2);
	}
	else if (mathSymbol === "-") {
		console.log(num1 - num2);
	}
	else if (mathSymbol === "*") {
		console.log(num1 * num2);
	}
	else if (mathSymbol === "/") {
		console.log(num1 / num2);
	}
	else if (mathSymbol === "√") {
	console.log(sqrt(num1));
	}

	// This line closes the connection to the command line interface.
	reader.close()

});