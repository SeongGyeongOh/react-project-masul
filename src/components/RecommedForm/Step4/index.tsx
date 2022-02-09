import React, { useState, useEffect } from 'react';
import { Slider } from 'antd';
import StepStress from './StepTaste';

const taste = [
  { id: 1,  taste: 'clean', txt: '깔끔한' },
  { id: 2, taste: 'tough', txt: '거친' },
  { id: 3,  taste: 'sweet', txt: '달달한' },
  { id: 4,  taste: 'savory', txt: '풍미있는' },
  { id: 5,  taste: 'light', txt: '산뜻한' },
  { id: 6,  taste: 'flavorful', txt: '향긋한' },
  { id: 7,  taste: 'fruit', txt: '과일향나는' },
  { id: 8,  taste: 'balance', txt: '균형있는' },
];

type PropsTypsStep = {
  clickSelData : (type: string,typeName:string) => void;
};

const Step4 = ({ clickSelData, }: PropsTypsStep) => {
  const [currentNum,setNum] = useState<number>(0);
  const changeNum = (currentNum:number) => {
    setNum(currentNum);
  }

  return (
    <div className="step step4">
      <div className="step_layout step4">
        <div className="step_con">
          <h2>맛을 선택해주세요</h2>
          {taste.map((list) => {
            return (
              <StepStress
                key={list.id}
                txt={list.txt}
                taste={list.taste}
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

export default Step4;
