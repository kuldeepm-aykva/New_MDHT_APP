import {
  getMaxLengthForCountry,
  validatePhoneNumber,
} from '../../../../../utils/validation';

export const SignUpValidation = data => {
  const maxLength = getMaxLengthForCountry(data.selectedCode?.iso_code) || 15;

  let errors = {};
  if (!data.phoneNumber || data.phoneNumber.trim().length === 0) {
    errors.phoneNumber = 'Phone number is required';
  } else if (data.phoneNumber.length !== maxLength) {
    errors.phoneNumber = `Phone number must be exactly ${maxLength} digits for ${data.selectedCode?.label}`;
  }

  if (validatePhoneNumber(data.phoneNumber, data.selectedCode?.label)) {
    errors.phoneNumber = `Please enter proper number`;
  }
  return errors;
};
