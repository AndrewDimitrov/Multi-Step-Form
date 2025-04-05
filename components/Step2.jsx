"use client";

import Image from "next/image";
import { useState } from "react";

const Step2 = ({ showPreviousComponent, showNextComponent }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col justify-center gap-8 h-full">
      <div className="overflow-auto">
        <h2 className="text-[32px] font-extrabold mb-2">Select your plan</h2>
        <p className="mb-10" style={{ color: "hsl(231, 11%, 63%)" }}>
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex gap-4">
          <div className="grid grid-cols-3 gap-4 w-full mb-8">
            <label
              className="text-[1.1rem] font-extrabold border-1 p-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out plan"
              style={{
                color: "hsl(213, 96%, 18%)",
                borderColor: "hsl(229, 24%, 87%)",
              }}
            >
              <Image
                src={"/images/icon-arcade.svg"}
                alt={"Arcade Image"}
                width={40}
                height={40}
                className="mb-10"
              />
              <input
                type="radio"
                name="plan"
                value="arcade"
                className="hidden"
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
            <label
              className="text-[1.1rem] font-extrabold border-1 p-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out plan"
              style={{
                color: "hsl(213, 96%, 18%)",
                borderColor: "hsl(229, 24%, 87%)",
              }}
            >
              <Image
                src={"/images/icon-advanced.svg"}
                alt={"Arcade Image"}
                width={40}
                height={40}
                className="mb-10"
              />
              <input
                type="radio"
                name="plan"
                value="advanced"
                className="hidden"
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
            <label
              className="text-[1.1rem] font-extrabold border-1 p-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out plan"
              style={{
                color: "hsl(213, 96%, 18%)",
                borderColor: "hsl(229, 24%, 87%)",
              }}
            >
              <Image
                src={"/images/icon-pro.svg"}
                alt={"Arcade Image"}
                width={40}
                height={40}
                className="mb-10"
              />
              <input type="radio" name="plan" value="pro" className="hidden" />
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
        <div
          className="flex justify-center rounded-lg p-4 gap-4"
          style={{ backgroundColor: "hsl(217, 100%, 97%)" }}
        >
          <p
            className="mb-1 font-extrabold text-[13.28px]"
            style={
              isChecked === true
                ? { color: "hsl(231, 11%, 63%)" }
                : { color: "inherit" }
            }
          >
            Monthly
          </p>
          <input type="checkbox" className="toggle" onClick={handleToggle} />
          <p
            className="mb-1 font-extrabold text-[13.28px]"
            style={
              isChecked === false
                ? { color: "hsl(231, 11%, 63%)" }
                : { color: "inherit" }
            }
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
