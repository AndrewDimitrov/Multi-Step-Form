import { useState, useEffect } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import validator from "validator";

const Step1 = ({ formData, updateFormData, showNextComponent }) => {
  const [name, setName] = useState(formData.name || "");
  const [email, setEmail] = useState(formData.email || "");
  const [phone, setPhone] = useState(formData.phone || "");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  // Sync state with formData when it changes
  useEffect(() => {
    setName(formData.name || "");
    setEmail(formData.email || "");
    setPhone(formData.phone || "");
  }, [formData]); // Runs every time formData changes

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    updateFormData("name", newName); // Update the formData in the parent component

    // Clear error message when user is typing
    if (newName.length >= 3 && /^[a-zA-Z\s]+$/.test(newName)) {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    updateFormData("email", e.target.value); // Update the formData in the parent component

    // Clear error message when user is typing
    if (validator.isEmail(e.target.value)) {
      setEmailError("");
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    updateFormData("phone", e.target.value); // Update the formData in the parent component

    // Clear error message when user is typing
    if (validatePhoneNumber(e.target.value)) {
      setPhoneError("");
    }
  };

  // Phone number validation function
  const validatePhoneNumber = (phoneNumber) => {
    return isValidPhoneNumber(phoneNumber);
  };

  const checkIfRight = () => {
    setIsSubmitClicked(true); // Show errors after clicking the button

    let hasError = false;

    // Validate name
    if (name.length < 3) {
      setNameError("Minimum 3 characters required for name.");
      hasError = true;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      setNameError("Name should only contain letters and spaces.");
      hasError = true;
    }

    // Validate email
    if (!email || !validator.isEmail(email)) {
      setEmailError("Invalid mail address.");
      hasError = true;
    }

    // Validate phone number
    if (!phone || !validatePhoneNumber(phone)) {
      setPhoneError("Invalid phone number.");
      hasError = true;
    }

    // If there are no errors, proceed to the next step
    if (!hasError) {
      console.log("Updated formData before next step:", { name, email, phone });
      showNextComponent();
    }
  };

  return (
    <div className="flex flex-col justify-center gap-8 h-full">
      <div className="overflow-auto">
        <h2 className="text-[32px] font-extrabold mb-2">
          Personal Information
        </h2>
        <p className="mb-10" style={{ color: "hsl(231, 11%, 63%)" }}>
          Please provide your name, email address, and phone number.
        </p>

        {/* Name input */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="name" className="ml-1 font-medium">
              Name
            </label>
            {isSubmitClicked && nameError && (
              <p className="mx-1 text-red-500 text-[12.8px] font-semibold">
                {nameError}
              </p>
            )}
          </div>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            className={`p-3 text-base border rounded-[0.5rem] outline-none font-medium customFocus ${
              isSubmitClicked && nameError
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
        </div>

        {/* Email input */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="email" className="ml-1 font-medium">
              Email Address
            </label>
            {isSubmitClicked && emailError && (
              <p className="mx-1 text-red-500 text-[12.8px] font-semibold">
                {emailError}
              </p>
            )}
          </div>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="e.g. stephenking@lorem.com"
            className={`p-3 text-base border rounded-[0.5rem] outline-none font-medium customFocus ${
              isSubmitClicked && emailError
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
        </div>

        {/* Phone input */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="phone" className="ml-1 font-medium">
              Phone Number
            </label>
            {isSubmitClicked && phoneError && (
              <p className="mx-1 text-red-500 text-[12.8px] font-semibold">
                {phoneError}
              </p>
            )}
          </div>
          <input
            id="phone"
            name="phone"
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="e.g. +1 234 567 890"
            className={`p-3 text-base border rounded-[0.5rem] outline-none font-medium customFocus ${
              isSubmitClicked && phoneError
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
        </div>
      </div>

      {/* Next Step button */}
      <div className="flex justify-end mt-auto">
        <button
          className="text-white border-none py-4 px-6 rounded-lg font-medium text-base cursor-pointer transition-all duration-200 ease-in-out next"
          style={{ background: "hsl(213, 96%, 18%)" }}
          onClick={checkIfRight}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step1;
