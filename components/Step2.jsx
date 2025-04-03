"use client";

const Step2 = ({ showPreviousComponent, showNextComponent }) => {
    return (
        <div>
            <div>Select your plan</div>
            <div>You have the option of monthly or yearly billing.</div>
            <div>Arcade $9/mo</div>
            <div>Advanced $12/mo</div>
            <div>Pro $15/mo</div>
            <div>Monthly</div>
            <div>Yearly</div>
            <button onClick={showPreviousComponent}>Go Back</button>
            <button onClick={showNextComponent}>Next Step</button>
        </div>
    );
};

export default Step2;