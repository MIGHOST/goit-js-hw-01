"use strict";

//Task-4
let clientCredit = 23580;
const pricePerDroid = 3000;
let quantityDroid = prompt("How much droid are you need", '');
let totalPrice = (Number(quantityDroid) * pricePerDroid);
let message1;

if ( quantityDroid === null) {
  message1 = 'Cenceled by user';
} else if (totalPrice > clientCredit) {
  message1 = "U haven't enough credits!";
} else if (totalPrice <= clientCredit) {
  totalCredit = clientCredit - totalPrice;
  message1 = `U bought ${quantityDroid}! You credits = ${totalCredit}!`;
};
alert(message1);

