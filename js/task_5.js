"use strict";
//task-5

const chinaPrice = 100;
const chiliPrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaicaPrice = 120;
let userChoise = prompt("Input country for delivery", '');
if (userChoise === null) {
    alert("See you next time!");
  } else {

switch (userChoise.toLowerCase()) {
    case 'china':        
        alert(`Delivery in China cost ${chinaPrice} credits`);
        break;

    case 'chili':
               alert(`Delivery in Chili cost ${chiliPrice} credits`);
        break;

    case 'australia':
               alert(`Delivery in Australia cost ${australiaPrice} credits`);
        break;

    case 'india':
               alert(`Delivery in India cost ${indiaPrice} credits`);
        break;

    case 'jamaica':
               alert(`Delivery in Jamaica cost ${jamaicaPrice} credits`);
        break;

    default:
        alert("There is not delivery in your country!");

};

  }
