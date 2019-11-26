"use strict";


//Task-3
const ADMIN_PASSWORD = 'jqueryismyjam';
const pass = prompt("Enter password", '');
let message;
if (pass === null) {
  message = 'Cenceled by user';

} else if (pass === ADMIN_PASSWORD) {

  message = 'Welcome!';

} else if (pass != ADMIN_PASSWORD) {
  message = 'Access denied, wrong password!';
};

alert(message);
