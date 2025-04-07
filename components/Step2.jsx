"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Step2 = ({
  formData,
  updateFormData,
  showPreviousComponent,
  showNextComponent,
}) => {
  const [isChecked, setIsChecked] = useState(formData.yearly);
  const [selectedPlan, setSelectedPlan] = useState(
    formData.selectedPlan // Default to "arcade" if no plan is set
  );

  // Update formData when toggle is clicked
  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    updateFormData("yearly", newChecked); // Update the parent component's state
  };

  // Set selected plan and update the parent component's state
  const handlePlanClick = (planName) => {
    setSelectedPlan(planName);
    updateFormData("selectedPlan", planName); // Update the parent component's state
  };

  // This useEffect is used to set initial state when formData changes
  useEffect(() => {
    setIsChecked(formData.yearly);
    setSelectedPlan(formData.selectedPlan); // Ensure default is "arcade"
  }, [formData]); // Re-run the effect if formData changes

  return (
    <div className="flex flex-col justify-center gap-8 h-full">
      <div className="overflow-auto">
        <h2 className="text-[32px] font-extrabold mb-2">Select your plan</h2>
        <p className="mb-10" style={{ color: "hsl(231, 11%, 63%)" }}>
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex gap-4">
          <div className="grid grid-cols-3 gap-4 w-full mb-8">
            {/* Arcade Plan */}
            <label
              className={`text-[1.1rem] font-extrabold border-1 p-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out plan ${
                selectedPlan === "arcade" ? "planClicked" : "planNotClicked"
              }`}
              onClick={() => handlePlanClick("arcade")}
            >
              <Image
                src={"/images/icon-arcade.svg"}
                alt={"Arcade Image"}
                width={40}
                height={40}
                className="mb-10"
              />
              Arcade <br />
              {isChecked ? (
                <>
                  <span
                    className="text-[0.9rem]/1.5 font-normal mt-[4.4px]"
                    style={{ color: "hsl(231, 11%, 63%)" }}
                  >
                    $90/yr
                  </span>
                  <div className="text-[0.9rem] font-[600]">2 months free</div>
                </>
              ) : (
                <span
                  className="text-[0.9rem]/1.5 font-normal mt-[4.4px]"
                  style={{ color: "hsl(231, 11%, 63%)" }}
                >
                  $9/mo
                </span>
              )}
            </label>

            {/* Advanced Plan */}
            <label
              className={`text-[1.1rem] font-extrabold border-1 p-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out plan ${
                selectedPlan === "advanced" ? "planClicked" : "planNotClicked"
              }`}
              onClick={() => handlePlanClick("advanced")}
            >
              <Image
                src={"/images/icon-advanced.svg"}
                alt={"Advanced Image"}
                width={40}
                height={40}
                className="mb-10"
              />
              Advanced <br />
              {isChecked ? (
                <>
                  <span
                    className="text-[0.9rem]/1.5 font-normal mt-[4.4px]"
                    style={{ color: "hsl(231, 11%, 63%)" }}
                  >
                    $120/yr
                  </span>
                  <div className="text-[0.9rem] font-[600]">2 months free</div>
                </>
              ) : (
                <span
                  className="text-[0.9rem]/1.5 font-normal mt-[4.4px]"
                  style={{ color: "hsl(231, 11%, 63%)" }}
                >
                  $12/mo
                </span>
              )}
            </label>

            {/* Pro Plan */}
            <label
              className={`text-[1.1rem] font-extrabold border-1 p-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out plan ${
                selectedPlan === "pro" ? "planClicked" : "planNotClicked"
              }`}
              onClick={() => handlePlanClick("pro")}
            >
              <Image
                src={"/images/icon-pro.svg"}
                alt={"Pro Image"}
                width={40}
                height={40}
                className="mb-10"
              />
              Pro <br />
              {isChecked ? (
                <>
                  <span
                    className="text-[0.9rem]/1.5 font-normal mt-[4.4px]"
                    style={{ color: "hsl(231, 11%, 63%)" }}
                  >
                    $150/yr
                  </span>
                  <div className="text-[0.9rem] font-[600]">2 months free</div>
                </>
              ) : (
                <span
                  className="text-[0.9rem]/1.5 font-normal mt-[4.4px]"
                  style={{ color: "hsl(231, 11%, 63%)" }}
                >
                  $15/mo
                </span>
              )}
            </label>
          </div>
        </div>

        {/* Toggle for Monthly/Yearly */}
        <div
          className="flex justify-center rounded-lg p-4 gap-4"
          style={{ backgroundColor: "hsl(217, 100%, 97%)" }}
        >
          <p
            className="mb-1 font-extrabold text-[13.28px]"
            style={isChecked ? { color: "hsl(231, 11%, 63%)" } : {}}
          >
            Monthly
          </p>
          <input
            type="checkbox"
            className="toggle"
            checked={isChecked}
            onChange={handleToggle}
          />
          <p
            className="mb-1 font-extrabold text-[13.28px]"
            style={!isChecked ? { color: "hsl(231, 11%, 63%)" } : {}}
          >
            Yearly
          </p>
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

export default Step2;
