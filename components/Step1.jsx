"use client";
import { useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import debounce from "lodash.debounce";

const validatePhoneNumber = (phoneNumber) => {
  return isValidPhoneNumber(phoneNumber);
};

const Step1 = ({ showNextComponent }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const isValid = validatePhoneNumber(phone);

    if (isValid) {
      alert("Phone number is valid!");
    } else {
      alert("Invalid phone number!");
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-[32px] font-extrabold mb-2">Personal Information</h2>
      <p className="mb-10" style={{ color: "hsl(231, 11%, 63%)" }}>
        Please provide your name, email address, and phone number.
      </p>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="e.g. Stephen King"
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="e.g. stephenking@lorem.com"
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        name="phone"
        type="text"
        placeholder="e.g. +1 234 567 890"
      />
      <button onClick={showNextComponent}>Next Step</button>
    </div>
  );
};

export default Step1;
