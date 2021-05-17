//import {dataPost, dataGet} from './services';
import {createPost} from './createPost';
import {checkInput} from './checkInput';
import { posts } from './db';

export function form(selector, parentSelector, nextSelector, values) {
  const $form = document.querySelector(selector),
        $parentState = document.querySelector(parentSelector),
        $nextState = document.querySelector(nextSelector),
        $inputName = $form.querySelector('input[name="name"]'),
        $inputPassword = $form.querySelector('input[name="password"]');
  
  $form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;
    const checkName = checkInput({input: $inputName, leng: 3, values, match: true}),
          checkPassword = checkInput({input: $inputPassword, leng: 3});

    isValid = isValid && checkName.valid && checkPassword.valid;

    

    if (isValid) {

      /* Without database */
      $parentState.style.display = 'none';
      $nextState.style.display = 'block';
      createPost(posts, '.app__items-top');

      /* ------------------------With database--------------------------------------- */

      //const data = JSON.stringify(Object.fromEntries(new FormData($form).entries()));
  
      /* dataPost('http://localhost:3000/user', data)
      .then(() => {
        dataGet('http://localhost:3000/posts')
          .then(data => {
            $parentState.style.display = 'none';
            $nextState.style.display = 'block';
            createPost(data, '.app__items-top');
          });
      })
      .catch(() => {
        const $errBlock = document.createElement('div');
        $errBlock.classList.add('error');
        $errBlock.textContent = 'Sorry, something went wrong...';
        $form.after($errBlock);
      })
      .finally(() => {
        $form.reset();
      }); */
    }
  });
    
}
