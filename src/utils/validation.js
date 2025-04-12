import { isValidPhoneNumber } from "libphonenumber-js";
import validator from "validator";

export const validateName = (name) => {
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return "Name should only contain letters and spaces.";
  } else if (name.length < 3) {
    return "Minimum 3 characters required for name.";
  }
  return "";
};

export const validateEmail = (email) => {
  if (!email || !validator.isEmail(email)) return "Invalid email address.";
  return "";
};

export const validatePhone = (phone) => {
  if (!phone || !isValidPhoneNumber(phone)) return "Invalid phone number.";
  return "";
};

export const validateFormData = (formData) => {
  return {
    name: validateName(formData.name),
    email: validateEmail(formData.email),
    phone: validatePhone(formData.phone),
  };
};
