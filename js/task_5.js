"use strict";
//task-5

let costDelivery;
let userChoise = prompt("Input country for delivery", '');
let delivery=userChoise.toLowerCase();
switch (delivery) {
    case 'china':
        costDelivery = 100;
        alert(`Delivery in ${delivery} cost ${costDelivery} credits`);
        break;

    case 'chili':
        costDelivery = 250;
        alert(`Delivery in ${delivery} cost ${costDelivery} credits`);
        break;

    case 'australia':
        costDelivery = 170;
        alert(`Delivery in ${delivery} cost ${costDelivery} credits`);
        break;

    case 'india':
        costDelivery = 80;
        alert(`Delivery in ${delivery} cost ${costDelivery} credits`);
        break;

    case 'jamaica':
        costDelivery = 120;
        alert(`Delivery in ${delivery} cost ${costDelivery} credits`);
        break;  
    
    default:
        alert("There is not delivery in your country!");

};