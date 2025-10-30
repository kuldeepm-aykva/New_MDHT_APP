import {validatePassword} from '../../../../../utils/validation';

export const PasswordValidation = data => {
  let errors = {
    PasswordError: '',
    ConfirmPasswordError: '',
  };

  //  Password validation
  if (!data.Password.Password || data.Password.Password.trim().length === 0) {
    errors.PasswordError = 'Password is required';
  } else if (!validatePassword(data.Password.Password)) {
    errors.PasswordError =
      'Use 8+ characters with a capital letter, number, & special symbol';
  }

  // Confirm password validation
  if (
    !data.Password.ConfirmPassword ||
    data.Password.ConfirmPassword.trim().length === 0
  ) {
    errors.ConfirmPasswordError = 'Confirm Password is required';
  } else if (data.Password.Password !== data.Password.ConfirmPassword) {
    errors.ConfirmPasswordError = 'Passwords do not match';
  }

  return errors;
};
