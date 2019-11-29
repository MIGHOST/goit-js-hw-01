"use strict";
//task-6

let userInput;
let total = 0;

do {
  userInput = prompt('Input a number ');
  let inputNum = Number(userInput); 
  if (Number.isNaN(inputNum)) {
    alert("Your input not a number");
  } else {
    total += inputNum;
  }
} while (userInput !== null);

alert(`Amount = ${total}`);
