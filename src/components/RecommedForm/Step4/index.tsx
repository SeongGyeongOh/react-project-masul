import React, { useState, useEffect } from 'react';
import { Slider } from 'antd';
import StepStress from './StepTaste';

const taste = [
  { id: 1, taste: 'clean', txt: '깔끔' },
  { id: 2, taste: 'tough', txt: '거친' },
  { id: 3, taste: 'sweet', txt: '달달' },
  { id: 4, taste: 'savory', txt: '풍미' },
  { id: 5, taste: 'light', txt: '산뜻' },
  { id: 6, taste: 'flavorful', txt: '향긋' },
  { id: 7, taste: 'fruit', txt: '과일향' },
  { id: 8, taste: 'balance', txt: '균형' },
  { id: 9, taste: 'soft', txt: '부드러운' },
  { id: 10, taste: 'bitter', txt: '씁쓸' },
  { id: 11, taste: 'heavy', txt: '무거운' },
];

type PropsTypsStep = {
  clickSelData: (type: string, typeName: string) => void;
  next: () => void | null;
};

const Step4 = ({ clickSelData, next }: PropsTypsStep) => {
  const [currentNum, setNum] = useState<number>(0);
  const changeNum = (currentNum: number) => {
    setNum(currentNum);
  };

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
                changeNum={changeNum}
                currentNum={currentNum}
              />
            );
          })}
        </div>
        <div
          className="next-Btn"
          onClick={() => {
            clickSelData(taste[currentNum - 1].taste, 'taste');
          }}
        >
          <button onClick={next}>다음</button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
