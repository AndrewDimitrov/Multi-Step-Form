"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { validateFormData } from "../utils/validation";

const Step1 = dynamic(() => import("../../components/Step1"), { ssr: false });
const Step2 = dynamic(() => import("../../components/Step2"), { ssr: false });
const Step3 = dynamic(() => import("../../components/Step3"), { ssr: false });
const Step4 = dynamic(() => import("../../components/Step4"), { ssr: false });
const Final = dynamic(() => import("../../components/Final"), { ssr: false });

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    yearly: false,
    selectedPlan: "arcade",
    firstAdd: false,
    secondAdd: false,
    thirdAdd: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const [currentComponent, setCurrentComponent] = useState(0);

  const showNextComponent = () => {
    setCurrentComponent((prevComponent) => prevComponent + 1);
  };

  const showPreviousComponent = () => {
    setCurrentComponent((currentComponent) => currentComponent - 1);
  };

  const showClickedComponent = (clickedComponent) => {
    setCurrentComponent(clickedComponent);
  };

  // This function will be called from Step4 Confirm
  const validateAndGoToFinal = async (setIsSubmitting) => {
    setIsSubmitting(true);

    const errors = validateFormData(formData); // Validate the form data
    setFormErrors(errors); // Update the formErrors state with the validation results

    // Check if there are any errors
    if (errors.name || errors.email || errors.phone) {
      setCurrentComponent(0);
      setIsSubmitting(false);
    } else {
      try {
        await fetch("/api/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (e) {
        console.log(e);
      } finally {
        setIsSubmitting(false);
      }

      setCurrentComponent("Final");

      setFormData(() => ({
        name: "",
        email: "",
        phone: "",
        yearly: false,
        selectedPlan: "arcade",
        firstAdd: false,
        secondAdd: false,
        thirdAdd: false,
      }));
    }
  };

  return (
    <main
      className="bg-white flex max-w-[96%] rounded-lg p-4"
      style={{
        borderColor: "hsl(231, 100%, 99%)",
        height: "min(82%, 700px)",
        width: "min(100%, 1000px)",
        boxShadow: "10px 10px 80px -10px #0000001a",
      }}
    >
      <div
        className="flex flex-col gap-8 bg-cover rounded-lg py-12 px-8"
        style={{
          backgroundImage: "url('/images/bg-sidebar-desktop.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "max(250px, 33%)",
        }}
      >
        <div
          className="flex items-start gap-4 cursor-pointer"
          onClick={() => showClickedComponent(0)}
        >
          <div
            className="flex items-center justify-center rounded-full border-1 w-10 aspect-square font-extrabold transition-all duration-200 ease-in-out"
            style={{
              color:
                currentComponent === 0
                  ? "hsl(213, 96%, 18%)"
                  : "hsl(206, 94%, 87%)",
              borderColor: "hsl(206, 94%, 87%)",
              backgroundColor:
                currentComponent === 0 ? "hsl(206, 94%, 87%)" : "transparent",
            }}
          >
            1
          </div>
          <div>
            <p
              className="mb-0.5 text-[14.4px] uppercase"
              style={{ color: "hsl(229, 24%, 87%)" }}
            >
              Step 1
            </p>
            <h3 className="mb-1 text-base text-white font-extrabold uppercase">
              Your info
            </h3>
          </div>
        </div>

        <div
          className="flex items-start gap-4 cursor-pointer"
          onClick={() => showClickedComponent(1)}
        >
          <div
            className="flex items-center justify-center rounded-full border-1 w-10 aspect-square font-extrabold transition-all duration-200 ease-in-out"
            style={{
              color:
                currentComponent === 1
                  ? "hsl(213, 96%, 18%)"
                  : "hsl(206, 94%, 87%)",
              borderColor: "hsl(206, 94%, 87%)",
              backgroundColor:
                currentComponent === 1 ? "hsl(206, 94%, 87%)" : "transparent",
            }}
          >
            2
          </div>
          <div>
            <p
              className="mb-0.5 text-[14.4px] uppercase"
              style={{ color: "hsl(229, 24%, 87%)" }}
            >
              Step 2
            </p>
            <h3 className="mb-1 text-base text-white font-extrabold uppercase">
              Select plan
            </h3>
          </div>
        </div>

        <div
          className="flex items-start gap-4 cursor-pointer"
          onClick={() => showClickedComponent(2)}
        >
          <div
            className="flex items-center justify-center rounded-full border-1 w-10 aspect-square font-extrabold transition-all duration-200 ease-in-out"
            style={{
              color:
                currentComponent === 2
                  ? "hsl(213, 96%, 18%)"
                  : "hsl(206, 94%, 87%)",
              borderColor: "hsl(206, 94%, 87%)",
              backgroundColor:
                currentComponent === 2 ? "hsl(206, 94%, 87%)" : "transparent",
            }}
          >
            3
          </div>
          <div>
            <p
              className="mb-0.5 text-[14.4px] uppercase"
              style={{ color: "hsl(229, 24%, 87%)" }}
            >
              Step 3
            </p>
            <h3 className="mb-1 text-base text-white font-extrabold uppercase">
              Add-ons
            </h3>
          </div>
        </div>

        <div
          className="flex items-start gap-4 cursor-pointer"
          onClick={() => showClickedComponent(3)}
        >
          <div
            className="flex items-center justify-center rounded-full border-1 w-10 aspect-square font-extrabold transition-all duration-200 ease-in-out"
            style={{
              color:
                currentComponent === 3
                  ? "hsl(213, 96%, 18%)"
                  : "hsl(206, 94%, 87%)",
              borderColor: "hsl(206, 94%, 87%)",
              backgroundColor:
                currentComponent === 3 ? "hsl(206, 94%, 87%)" : "transparent",
            }}
          >
            4
          </div>
          <div>
            <p
              className="mb-0.5 text-[14.4px] uppercase"
              style={{ color: "hsl(229, 24%, 87%)" }}
            >
              Step 4
            </p>
            <h3 className="mb-1 text-base text-white font-extrabold uppercase">
              Summary
            </h3>
          </div>
        </div>
      </div>

      <div className="mx-auto pt-[3rem] pr-[2rem] pb-[2rem] pl-[2rem] w-full max-w-[600px]">
        {currentComponent === 0 && (
          <Step1
            formData={formData}
            formErrors={formErrors} // Pass down errors to show red borders
            updateFormData={updateFormData}
            showNextComponent={showNextComponent}
          />
        )}
        {currentComponent === 1 && (
          <Step2
            formData={formData}
            updateFormData={updateFormData}
            showPreviousComponent={showPreviousComponent}
            showNextComponent={showNextComponent}
          />
        )}
        {currentComponent === 2 && (
          <Step3
            formData={formData}
            updateFormData={updateFormData}
            showPreviousComponent={showPreviousComponent}
            showNextComponent={showNextComponent}
          />
        )}
        {currentComponent === 3 && (
          <Step4
            showPreviousComponent={showPreviousComponent}
            formData={formData}
            showClickedComponent={showClickedComponent}
            validateAndGoToFinal={validateAndGoToFinal} // Pass function to handle confirm click
          />
        )}
        {currentComponent === "Final" && <Final />}
      </div>
    </main>
  );
}
