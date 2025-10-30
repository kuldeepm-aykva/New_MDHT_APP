import {parsePhoneNumberFromString} from 'libphonenumber-js';

import {getExampleNumber} from 'libphonenumber-js';
import examples from 'libphonenumber-js/mobile/examples';

// to get length of number mobile
export const getMaxLengthForCountry = isoCode => {
  try {
    const example = getExampleNumber(isoCode, examples);
    if (example) {
      return example.nationalNumber.length;
    }
  } catch (error) {
    console.log(error);
  }
  return 15;
};

// phone number validation
export const validatePhoneNumber = (phoneNumber, country) => {
  try {
    const phoneNumberObj = parsePhoneNumberFromString(phoneNumber, country);
    if (phoneNumberObj && phoneNumberObj.isValid()) {
      return true;
    }
  } catch (error) {}
};

// email validation
export const validateEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.toLowerCase());
};

// password validation
export const validatePassword = password => {
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return regex.test(password);
};
