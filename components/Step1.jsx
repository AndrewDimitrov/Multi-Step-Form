import { useState, useEffect } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import validator from "validator";

const Step1 = ({ formData, updateFormData, showNextComponent }) => {
  // Initialize values from formData.
  const [name, setName] = useState(formData.name || "");
  const [email, setEmail] = useState(formData.email || "");
  const [phone, setPhone] = useState(formData.phone || "");

  // Error messages.
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Touched flags: they are false on initial load so errors are not shown.
  const [nameTouched, setNameTouched] = useState(!!formData.name);
  const [emailTouched, setEmailTouched] = useState(!!formData.email);
  const [phoneTouched, setPhoneTouched] = useState(!!formData.phone);

  // Sync local state with formData (if needed)
  useEffect(() => {
    setName(formData.name || "");
    setEmail(formData.email || "");
    setPhone(formData.phone || "");
  }, [formData]);

  // Validate only if field has been touched.
  useEffect(() => {
    if (nameTouched) {
      if (name.length < 3) {
        setNameError("Minimum 3 characters required for name.");
      } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        setNameError("Invalid name.");
      } else {
        setNameError("");
      }
    }
  }, [name, nameTouched]);

  useEffect(() => {
    if (emailTouched) {
      if (!validator.isEmail(email)) {
        setEmailError("Invalid email address.");
      } else {
        setEmailError("");
      }
    }
  }, [email, emailTouched]);

  useEffect(() => {
    if (phoneTouched) {
      if (!phone || !isValidPhoneNumber(phone)) {
        setPhoneError("Invalid phone number.");
      } else {
        setPhoneError("");
      }
    }
  }, [phone, phoneTouched]);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    updateFormData("name", newName);
    setNameTouched(true);
    if (newName.length >= 3 && /^[a-zA-Z\s]+$/.test(newName)) {
      setNameError("");
    } else if (!/^[a-zA-Z\s]+$/.test(newName)) {
      setNameError("Invalid name.");
    } else if (!newName.length >= 3) {
      setNameError("Minimum 3 characters required for name.");
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    updateFormData("email", newEmail);
    setEmailTouched(true);
    if (validator.isEmail(newEmail)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address.");
    }
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    updateFormData("phone", newPhone);
    setPhoneTouched(true);
    if (isValidPhoneNumber(newPhone)) {
      setPhoneError("");
    } else {
      setPhoneError("Invalid phone number.");
    }
  };

  const checkIfRight = () => {
    // Mark all fields as touched, so errors show immediately.
    setNameTouched(true);
    setEmailTouched(true);
    setPhoneTouched(true);

    let hasError = false;
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setNameError("Invalid name.");
      hasError = true;
    }
    if (name.length < 3) {
      setNameError("Minimum 3 characters required for name.");
      hasError = true;
    }
    if (!validator.isEmail(email)) {
      setEmailError("Invalid email address.");
      hasError = true;
    }
    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError("Invalid phone number.");
      hasError = true;
    }
    if (!hasError) {
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
            {nameError && (
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
              nameError ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        {/* Email input */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="email" className="ml-1 font-medium">
              Email Address
            </label>
            {emailError && (
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
              emailError ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>

        {/* Phone input */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="phone" className="ml-1 font-medium">
              Phone Number
            </label>
            {phoneError && (
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
              phoneError ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
      </div>

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
