"use client";

const Step4 = ({ showPreviousComponent }) => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-[32px] font-extrabold mb-2">Finishing up</h2>
      <p className="mb-10" style={{ color: "hsl(231, 11%, 63%)" }}>
        Double-check everything looks OK before confirming.
      </p>
      <div>Total (per month/year)</div>
      <button onClick={showPreviousComponent}>Go Back</button>
      <button>Confirm</button>
    </div>
  );
};

export default Step4;
