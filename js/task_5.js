"use strict";
//task-5

let costDelivery;
let delivery;
let userChoise = prompt("Input country for delivery", '');
if (userChoise === null) {
    alert("See you next time!");
  } else if (userChoise === "") {
    alert("The string is empty!");
  } else {
    delivery = userChoise.toLowerCase()}; 


switch (delivery) {
    case 'china':
        costDelivery = 100;
        alert(`Delivery in ${delivery} cost ${costDelivery} credits`);
        break;

    case 'chili':
        costDelivery = 250;
        alert(`Delivery in ${delivery} cost ${costDelivery} credits`);
        break;

    case 'australia.toLowerCase()':
        costDelivery = 170;
        alert(`Delivery in ${delivery} cost ${costDelivery} credits`);
        break;

    case 'india.toLowerCase()':
        costDelivery = 80;
        alert(`Delivery in ${delivery} cost ${costDelivery} credits`);
        break;

    case 'jamaica.toLowerCase()':
        costDelivery = 120;
        alert(`Delivery in ${delivery} cost ${costDelivery} credits`);
        break;

    default:
        alert("There is not delivery in your country!");

};


