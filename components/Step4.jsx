"use client";

const Step4 = ({
  formData,
  showPreviousComponent,
  showClickedComponent,
  validateAndGoToFinal,
}) => {
  const planPrice = () => {
    if (formData.selectedPlan === "arcade") return 9;
    else if (formData.selectedPlan === "advanced") return 12;
    else if (formData.selectedPlan === "pro") return 15;
  };

  const PlanTotalPrice = () => {
    return formData.yearly ? planPrice() * 10 : planPrice();
  };

  const addOn1 = () => {
    if (formData.firstAdd === true) return formData.yearly ? 10 : 1;
    return 0;
  };

  const addOn2 = () => {
    if (formData.secondAdd === true) return formData.yearly ? 20 : 2;
    return 0;
  };

  const addOn3 = () => {
    if (formData.thirdAdd === true) return formData.yearly ? 20 : 2;
    return 0;
  };

  const total = PlanTotalPrice() + addOn1() + addOn2() + addOn3();

  return (
    <div className="flex flex-col justify-center gap-8 h-full">
      <div className="overflow-auto">
        <h2 className="text-[32px] font-extrabold mb-2">Finishing up</h2>
        <p className="mb-10" style={{ color: "hsl(231, 11%, 63%)" }}>
          Double-check everything looks OK before confirming.
        </p>

        <div
          className="flex flex-col items-center justify-between gap-6 mb-8 p-8 rounded-lg"
          style={{ backgroundColor: "hsl(217, 100%, 97%)" }}
        >
          <div
            className={`flex items-center justify-between gap-6 w-full ${
              formData.firstAdd || formData.secondAdd || formData.thirdAdd
                ? "borderStep4 pb-7"
                : null
            }`}
          >
            <div>
              <h3 className="font-semibold text-[1.15rem]">
                {formData.selectedPlan.charAt(0).toUpperCase() +
                  formData.selectedPlan.slice(1)}
                &nbsp;({formData.yearly ? "Yearly" : "Monthly"})
              </h3>
              <p
                onClick={() => showClickedComponent(1)}
                className="inline underline cursor-pointer transition-all duration-200 ease-in-out change"
                style={{ color: "hsl(231, 11%, 63%)" }}
              >
                Change
              </p>
            </div>
            <p
              className="font-extrabold text-[1.1rem]"
              style={{ color: "hsl(213, 96%, 18%)" }}
            >
              ${formData.yearly ? planPrice() * 10 : planPrice()}/
              {formData.yearly ? "yr" : "mo"}
            </p>
          </div>
          {formData.firstAdd || formData.secondAdd || formData.thirdAdd ? (
            <>
              {formData.firstAdd && (
                <div className="flex items-center justify-between mr-auto w-full">
                  <p
                    className="font-normal"
                    style={{ color: "hsl(231, 11%, 63%)" }}
                  >
                    Online service
                  </p>
                  <p className="font-semibold">
                    +${formData.yearly ? 10 + "/yr" : 1 + "/mo"}
                  </p>
                </div>
              )}
              {formData.secondAdd && (
                <div className="flex items-center justify-between mr-auto w-full">
                  <p
                    className="font-normal"
                    style={{ color: "hsl(231, 11%, 63%)" }}
                  >
                    Larger storage
                  </p>
                  <p className="font-semibold">
                    +${formData.yearly ? 20 + "/yr" : 2 + "/mo"}
                  </p>
                </div>
              )}
              {formData.thirdAdd && (
                <div className="flex items-center justify-between mr-auto w-full">
                  <p
                    className="font-normal"
                    style={{ color: "hsl(231, 11%, 63%)" }}
                  >
                    Customizable profile
                  </p>
                  <p className="font-semibold">
                    +${formData.yearly ? 20 + "/yr" : 2 + "/mo"}
                  </p>
                </div>
              )}
            </>
          ) : null}
        </div>

        <div className="flex justify-between items-center px-8">
          <p style={{ color: "hsl(231, 11%, 63%)" }}>
            Total (per {!formData.yearly ? "month" : "year"})
          </p>
          <p
            className="text-[20.8px] font-extrabold"
            style={{ color: "hsl(243, 100%, 62%)" }}
          >
            ${total}
            {formData.yearly ? "/yr" : "/mo"}
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
          style={{ background: "hsl(243, 100%, 62%)" }}
          onClick={validateAndGoToFinal}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;
