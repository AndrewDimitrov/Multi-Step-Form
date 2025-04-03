"use client";

const Step3 = ({ showPreviousComponent, showNextComponent }) => {
  return (
    <div>
      <div>Pick add-ons</div>
      <div>Add-ons help enhance your gaming experience.</div>
      <div>Online service Access to multiplayer games +$1/mo</div>
      <div>Larger storage Extra 1TB of cloud save +$2/mo</div>
      <div>Customizable Profile Custom theme on your profile +$2/mo</div>
      <button onClick={showPreviousComponent}>Go Back</button>
      <button onClick={showNextComponent}>Next Step</button>
    </div>
  );
};

export default Step3;
