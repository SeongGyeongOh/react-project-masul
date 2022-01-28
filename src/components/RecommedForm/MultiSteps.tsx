import React from 'react';
import { Step1, Step2, Step3, Step4 } from './Step';
import StepZilla from 'react-stepzilla';
const steps = [
  { name: '', component: <Step1 /> },
  { name: '', component: <Step2 /> },
  { name: '', component: <Step3 /> },
  { name: '', component: <Step4 /> },
];

const MultiSteps = () => {
  return (
    <div className="step-progress">
      <StepZilla steps={steps} />
    </div>
  );
};
export default MultiSteps;
