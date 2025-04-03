"use client";

const Step4 = ({ showPreviousComponent }) => {
  return (
    <div>
      <div>Finishing up</div>
      <div>Double-check everything looks OK before confirming.</div>
      <div>Total (per month/year)</div>
      <button onClick={showPreviousComponent}>Go Back</button>
      <button>Confirm</button>
    </div>
  );
};

export default Step4;
