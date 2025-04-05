"use client";

const Step3 = ({ showPreviousComponent, showNextComponent }) => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-[32px] font-extrabold mb-2">Pick add-ons</h2>
      <p className="mb-10" style={{ color: "hsl(231, 11%, 63%)" }}>
        Add-ons help enhance your gaming experience.
      </p>
      <div>Online service Access to multiplayer games +$1/mo</div>
      <div>Larger storage Extra 1TB of cloud save +$2/mo</div>
      <div>Customizable Profile Custom theme on your profile +$2/mo</div>
      <button onClick={showPreviousComponent}>Go Back</button>
      <button onClick={showNextComponent}>Next Step</button>
    </div>
  );
};

export default Step3;
