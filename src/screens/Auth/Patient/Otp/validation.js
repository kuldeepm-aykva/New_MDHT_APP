export const OTpValidation = data => {
  let errors = {};
  if (!data.otp || data.otp.trim().length < 4) {
    errors.otp = 'OTP is required';
  }
  return errors;
};
