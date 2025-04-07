"use client";

import React, { useState, useEffect } from "react";

const Step3 = ({
  formData,
  updateFormData,
  showPreviousComponent,
  showNextComponent,
}) => {
  const [checkedFirst, setCheckedFirst] = useState(false);
  const [checkedSecond, setCheckedSecond] = useState(false);
  const [checkedThird, setCheckedThird] = useState(false);

  // Sync checkbox state with formData on load
  useEffect(() => {
    setCheckedFirst(formData.firstAdd || false);
    setCheckedSecond(formData.secondAdd || false);
    setCheckedThird(formData.thirdAdd || false);
  }, [formData]);

  const handleFirstCheck = () => {
    const newValue = !checkedFirst;
    setCheckedFirst(newValue);
    updateFormData("firstAdd", newValue);
  };

  const handleSecondCheck = () => {
    const newValue = !checkedSecond;
    setCheckedSecond(newValue);
    updateFormData("secondAdd", newValue);
  };

  const handleThirdCheck = () => {
    const newValue = !checkedThird;
    setCheckedThird(newValue);
    updateFormData("thirdAdd", newValue);
  };

  return (
    <div className="flex flex-col justify-center gap-8 h-full">
      <div className="overflow-auto">
        <h2 className="text-[32px] font-extrabold mb-2">Pick add-ons</h2>
        <p className="mb-10" style={{ color: "hsl(231, 11%, 63%)" }}>
          Add-ons help enhance your gaming experience.
        </p>
        <div className="flex flex-col gap-4">
          {/* First Add-on */}
          <div
            onClick={handleFirstCheck}
            className="flex gap-8 items-center border-1 p-6 rounded-lg cursor-pointer transition-all duration-200 ease-in-out planNotClicked"
          >
            <label
              className="inline-block cursor-pointer w-[19.2px] h-[19.2px] relative select-none"
              onDoubleClick={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            >
              <input
                type="checkbox"
                className="peer hidden"
                checked={checkedFirst}
                onChange={handleFirstCheck}
              />
              {!checkedFirst ? (
                <div className="w-full h-full bg-white border border-gray-300 rounded"></div>
              ) : (
                <img
                  src="/images/icon-checkmark.svg"
                  alt="Checked"
                  className="p-[2.5px] w-full h-full object-contain rounded checkboxAdd checkboxBackground pointer-events-none"
                />
              )}
            </label>
            <div>
              <h4
                className="text-[1.1rem] mb-1 font-extrabold"
                style={{ color: "hsl(213, 96%, 18%)" }}
              >
                Online service
              </h4>
              <p
                className="font-normal"
                style={{ color: "hsl(231, 11%, 63%)" }}
              >
                Access to multiplayer games
              </p>
            </div>
            <p
              className="ml-auto font-semibold"
              style={{ color: "hsl(243, 100%, 62%)" }}
            >
              {formData.yearly ? "+$10/yr" : "+$1/mo"}
            </p>
          </div>

          {/* Second Add-on */}
          <div
            onClick={handleSecondCheck}
            className="flex gap-8 items-center border-1 p-6 rounded-lg cursor-pointer transition-all duration-200 ease-in-out planNotClicked"
          >
            <label
              className="inline-block cursor-pointer w-[19.2px] h-[19.2px] relative select-none"
              onDoubleClick={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            >
              <input
                type="checkbox"
                className="peer hidden"
                checked={checkedSecond}
                onChange={handleSecondCheck}
              />
              {!checkedSecond ? (
                <div className="w-full h-full bg-white border border-gray-300 rounded"></div>
              ) : (
                <img
                  src="/images/icon-checkmark.svg"
                  alt="Checked"
                  className="p-[2.5px] w-full h-full object-contain rounded checkboxAdd checkboxBackground pointer-events-none"
                />
              )}
            </label>
            <div>
              <h4
                className="text-[1.1rem] mb-1 font-extrabold"
                style={{ color: "hsl(213, 96%, 18%)" }}
              >
                Larger storage
              </h4>
              <p
                className="font-normal"
                style={{ color: "hsl(231, 11%, 63%)" }}
              >
                Extra 1TB cloud save
              </p>
            </div>
            <p
              className="ml-auto font-semibold"
              style={{ color: "hsl(243, 100%, 62%)" }}
            >
              {formData.yearly ? "+$20/yr" : "+$2/mo"}
            </p>
          </div>

          {/* Third Add-on */}
          <div
            onClick={handleThirdCheck}
            className="flex gap-8 items-center border-1 p-6 rounded-lg cursor-pointer transition-all duration-200 ease-in-out planNotClicked"
          >
            <label
              className="inline-block cursor-pointer w-[19.2px] h-[19.2px] relative select-none"
              onDoubleClick={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            >
              <input
                type="checkbox"
                className="peer hidden"
                checked={checkedThird}
                onChange={handleThirdCheck}
              />
              {!checkedThird ? (
                <div className="w-full h-full bg-white border border-gray-300 rounded"></div>
              ) : (
                <img
                  src="/images/icon-checkmark.svg"
                  alt="Checked"
                  className="p-[2.5px] w-full h-full object-contain rounded checkboxAdd checkboxBackground pointer-events-none"
                />
              )}
            </label>
            <div>
              <h4
                className="text-[1.1rem] mb-1 font-extrabold"
                style={{ color: "hsl(213, 96%, 18%)" }}
              >
                Customizable Profile
              </h4>
              <p
                className="font-normal"
                style={{ color: "hsl(231, 11%, 63%)" }}
              >
                Custom theme on your profile
              </p>
            </div>
            <p
              className="ml-auto font-semibold"
              style={{ color: "hsl(243, 100%, 62%)" }}
            >
              {formData.yearly ? "+$20/yr" : "+$2/mo"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-auto">
        <button
          className="border-none py-4 px-6 rounded-lg font-medium text-base cursor-pointer transition-all duration-200 ease-in-out back"
          style={{ color: "hsl(231, 11%, 63%)" }}
          onClick={showPreviousComponent}
        >
          Go Back
        </button>
        <button
          className="text-white border-none py-4 px-6 rounded-lg font-medium text-base cursor-pointer transition-all duration-200 ease-in-out next"
          style={{ background: "hsl(213, 96%, 18%)" }}
          onClick={showNextComponent}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
