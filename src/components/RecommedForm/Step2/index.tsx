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
  dataCon: (arg: string) => void;
};

const Step2 = ({ dataCon }: PropsTypsStep) => {
  //StepCon 자식에게 보내는 용의 useState
  const [parentCon, setParentCon] = useState<string>('');
  //StepCon 자식이 클릭한 type값을 가져와서 필터 함수를 걸어, result라는 변수에 담음
  const updateCon = (parentCon: string): void => {
    setParentCon(parentCon);
  };
  //parentCon이 변경될 떄마다 dataCon에 result를 담아 부모에게 전달!
  useEffect(() => {
    dataCon(parentCon);
  }, [parentCon]);

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
                id={0}
                parentCon={parentCon}
                updateCon={updateCon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Step2;
