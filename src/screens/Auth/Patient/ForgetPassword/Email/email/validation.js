import {validateEmail} from '../../../../../../utils/validation';

export const ForgetEmailValidation = data => {
  let errors = {
    EmailError: '',
  };

  //  email validation
  if (!data.Email || data.Email.trim().length === 0) {
    errors.EmailError = 'Email is required.';
  } else if (!validateEmail(data.Email)) {
    errors.EmailError = 'Please enter a valid email address.';
  }

  return errors;
};
