//taking in user input
let userInput;
do {
  userInput = prompt("Kindly provide a number to check if prime");
  userInput = parseInt(userInput);
} while (!Number.isInteger(userInput));
