import React, { useState, useEffect } from 'react';
import Result from './Result';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { Steps, Step } from 'react-multistep-component';
import { isConstructorDeclaration } from 'typescript';
// const result = data.filter((recom: { type: string }) => {
//   {
//     if (recom.type === parentType) {
//       return true;
//     }
//   }
// });
type PropsTyps = {
  recommendData: () => void;
  data: any;
};

const MultiSteps = ({ recommendData, data }: PropsTyps) => {
  //Step1 자식한테 보내는 용의 useState
  const [stepOne, setStepOne] = useState<string>('');
  //StepType 자식이 클릭한 type값을 가져와 dataType에 담음
  const dataType = (stepOne: string): void => {
    setStepOne(stepOne); //stepOne을 step2쪽으로 전달
  };
  console.log(stepOne);

  //Step2 자식한테 보내는 용의 useState
  const [stepTwo, setStepTwo] = useState<string>('');
  //StepCon 자식이 클릭한 type값을 가져와 dataType에 담음
  const dataCon = (stepTwo: string): void => {
    setStepTwo(stepTwo); //stepOne을 step2쪽으로 전달
  };
  console.log(stepTwo);

  return (
    <Steps currentStep={1} prevButton="prev">
      <Step>
        <Step1 dataType={dataType} />
      </Step>
      <Step>
        <Step2 dataCon={dataCon} />
      </Step>
      <Step>
        <Step3 />
      </Step>
      <Step>
        <Step4 />
      </Step>
      <Step>
        <Result />
      </Step>
    </Steps>
  );
};
export default MultiSteps;
