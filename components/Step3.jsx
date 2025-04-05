"use client";

const Step3 = ({ showPreviousComponent, showNextComponent }) => {
  return (
    <div className="flex flex-col justify-center gap-8 h-full">
      <div className="overflow-auto">
        <h2 className="text-[32px] font-extrabold mb-2">Pick add-ons</h2>
        <p className="mb-10" style={{ color: "hsl(231, 11%, 63%)" }}>
          Add-ons help enhance your gaming experience.
        </p>
        <div className="flex flex-col gap-4">
          <div
            className={
              "flex gap-8 items-center border-1 p-6 rounded-lg cursor-pointer transition-all duration-200 ease-in-out planNotClicked"
            }
          >
            <input
              className="w-[1.2rem] h-[1.2rem] checkboxAdd cursor-pointer"
              type="checkbox"
              name="onlineService"
              id="onlineService"
            />
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
            <p>+$1/mo</p>
          </div>

          <div
            className={
              "border-1 p-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out planNotClicked"
            }
          >
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
            <p>+$2/mo</p>
          </div>

          <div
            className={
              "border-1 p-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out planNotClicked"
            }
          >
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
            <p>+$2/mo</p>
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
