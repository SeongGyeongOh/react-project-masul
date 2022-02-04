import React from 'react';
// import { Step1, Step2, Step3, Step4 } from './Step';
import StepZilla from 'react-stepzilla';
import Result from './Result';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
const steps = [
  { name: '', component: <Step1 /> },
  { name: '', component: <Step2 /> },
  { name: '', component: <Step3 /> },
  { name: '', component: <Step4 /> },
  { name: '', component: <Result /> },
];

type PropsTyps = {
  recommendData: () => void;
  data: any;
};

const MultiSteps = ({ recommendData, data }: PropsTyps) => {
  return (
    <div className="step-progress">
      <StepZilla steps={steps} />
    </div>
  );
};
export default MultiSteps;
