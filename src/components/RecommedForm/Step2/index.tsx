import React, { useState, useEffect } from 'react';
import party from '../../../assets/icons/party.png';
import present from '../../../assets/icons/present.png';
import StepCondition from './StepCondition';

const condition = [
  { id: 1, url: party, condition: 'alone', txt: '혼술' },
  { id: 2, url: party, condition: 'party', txt: '모임' },
  { id: 3, url: present, condition: 'present', txt: '선물' },
];
type PropsTypsStep = {
  clickSelData : (type: string,typeName:string) => void;
};

const Step2 = ({ clickSelData, }: PropsTypsStep) => {

  const [currentNum,setNum] = useState<number>(0);
  const changeNum = (currentNum:number) => {
    setNum(currentNum);
  }


  return (
    <div className="step step2">
      <div className="step_layout step2">
        <div className="step_con">
          <h2>어떤 상황인가요?</h2>
          {condition.map((list) => {
            return (
              <StepCondition
                key={list.id}
                url={list.url}
                txt={list.txt}
                condition={list.condition}
                id={list.id}
                clickSelData={clickSelData}
                changeNum={changeNum}
                currentNum={currentNum}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Step2;
