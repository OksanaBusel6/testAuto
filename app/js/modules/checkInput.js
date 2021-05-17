import {validator} from './validator';

const checkInput = ({input, leng, values, match = false}) => {
    const isValid = validator({ text: input.value, leng, values, match}),
          $inputBtn = input.closest('.form__input-box').querySelector('.form__input-btn'),
          $err = input.closest('.form__input-box').querySelector('.error');

    $inputBtn.style.display = 'none';

    if ($err) {
      $err.remove();
    }

    if (!isValid.valid) {
      $inputBtn.style.display = 'inline-block';
      const $errBlock = document.createElement('div');
      $errBlock.classList.add('error');
      $errBlock.textContent = messageError[isValid.error];
      input.after($errBlock);
    }
    return isValid;
};

const messageError = {
  length: 'חייב להכיל לפחות 3 תווים',
  match: 'שם זה כבר נלקח'
};

export {checkInput, messageError};