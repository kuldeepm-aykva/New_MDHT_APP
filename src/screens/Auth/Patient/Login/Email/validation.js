import {validateEmail} from '../../../../../utils/validation';

export const EmailLoginValidation = data => {
  let errors = {
    EmailError: '',
    PasswordError: '',
  };

  //  email validation
  if (!data.Data.Email || data.Data.Email.trim().length === 0) {
    errors.EmailError = 'Email is required.';
  } else if (!validateEmail(data.Data.Email)) {
    errors.EmailError = 'Please enter a valid email address.';
  }

  //  password validation
  if (!data.Data.Password || data.Data.Password.trim().length === 0) {
    errors.PasswordError = 'Password is required';
  }

  return errors;
};
