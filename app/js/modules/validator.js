const validator = ({text, leng, values, match = false}) => {
  let isValid = {valid: true};

  if (text.trim().length < leng) {
    isValid.valid = false;
    isValid.error = 'length';
  }

  if (match) {
    values.forEach(({name}) => {
      if (name === text) {
        isValid.valid = false;
        isValid.error = 'match';
      }
    });
  }

  return isValid;
};

export {validator};