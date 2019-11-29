"use strict";

//Task-4
let clientCredit = 23580;
const pricePerDroid = 3000;
let quantityDroid = prompt("How much droid are you need", '');
let totalPrice = (quantityDroid * pricePerDroid);


if ( quantityDroid === null) {
  console.log('Cenceled by user');
} else if (totalPrice > clientCredit) {
  console.log("U haven't enough credits!");
} else if (totalPrice <= clientCredit) {  
  alert(`You bought ${quantityDroid} droids! Your credits = ${clientCredit - totalPrice}!`);
};


