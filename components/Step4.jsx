"use client";

const Step4 = ({ showPreviousComponent }) => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-[32px] font-extrabold mb-2">Finishing up</h2>
      <p className="mb-10" style={{ color: "hsl(231, 11%, 63%)" }}>
        Double-check everything looks OK before confirming.
      </p>
      <div>Total (per month/year)</div>

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
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;
