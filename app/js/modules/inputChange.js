import { checkInput } from "./checkInput";


const inputChange = (values) => {
  const $inputName = document.querySelector('input[name="name"]'),
        $inputPassword = document.querySelector('input[name=password]');

  [$inputName, $inputPassword].forEach(input => {
    input.addEventListener('change', () => {
      let data = {input, leng: 3};
      if (input === $inputName) {
        data.values = values;
        data.match = true;
      }
      checkInput(data);
    });
  });
};

export {inputChange};