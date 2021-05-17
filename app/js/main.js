import {form} from './modules/form';
import { inputChange } from './modules/inputChange';
//import { dataGet } from './modules/services';
import { users } from './modules/db';

document.addEventListener('DOMContentLoaded', () => {

  /* Without database */
  form('.form', '.login', '.app', users);
  inputChange(users);

  /* --------With database--------- */

  /* dataGet('http://localhost:3000/user')
  .then(data =>{
    form('.form', '.login', '.app', data);
    inputChange(data);
  }); */


});