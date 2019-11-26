"use strict";
//task-6

let userInput;
let total = 0;

while (true) {
  userInput = +prompt('Input a number ');

  if (userInput === null) {
    break;
  }

  if (userInput <= 0) {
    break;
  }

  if (userInput === NaN) {
    total != userInput;
    break;
  }

  total += userInput;
}

alert(`Amount = ${total}`);