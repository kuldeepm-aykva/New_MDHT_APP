import { validateEmail } from "../../../../utils/validation";

export const CompleteProfileValidation = data => {
  let errors = {};

  // --- Profile Image ---
  // if (!data.UserProfile) {
  //   errors.UserProfile = 'Please upload your profile image';
  // }

  // --- First Name ---
  if (!data.fname || data.fname.trim().length === 0) {
    errors.fname = 'First name is required';
  }

  // --- Middle Name ---
  if (!data.mname || data.mname.trim().length === 0) {
    errors.mname = 'Middle name is required';
  }

  // --- Last Name ---
  if (!data.lname || data.lname.trim().length === 0) {
    errors.lname = 'Last name is required';
  }

  // --- Gender ---
  if (!data.gender) {
    errors.gender = 'Please select your gender';
  }

  // --- Date of Birth ---
  if (!data.DOB || data.DOB.length === 0) {
    errors.DOB = 'Date of birth is required';
  }

  // --- Email ---
  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Email address is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // --- Country ---
  if (!data.country || data.country.trim().length === 0) {
    errors.country = 'Country is required';
  }

  return errors;
};
