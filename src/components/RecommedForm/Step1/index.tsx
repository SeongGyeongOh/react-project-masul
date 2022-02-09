import { List } from 'antd/lib/form/Form';
import React, { useState, useEffect } from 'react';
import b from '../../../assets/icons/name_b.png';
import m from '../../../assets/icons/name_m.png';
import ma from '../../../assets/icons/name_ma.png';
import s from '../../../assets/icons/name_s.png';
import so from '../../../assets/icons/name_so.png';
import v from '../../../assets/icons/name_v.png';
import w from '../../../assets/icons/name_w.png';
import wi from '../../../assets/icons/name_wi.png';
import StepType from './StepType';

const type = [
  { id: 1, url: wi, type: '위스키' },
  { id: 2, url: v, type: '보드카' },
  { id: 3, url: s, type: '사케' },
  { id: 4, url: so, type: '소주' },
  { id: 5, url: ma, type: '막걸리' },
  { id: 6, url: w, type: '와인' },
  { id: 7, url: m, type: '맥주' },
  { id: 8, url: so, type: '전통술' },
  { id: 9, url: b, type: '브랜디' },
];

type PropsTypsStep = {
  clickSelData: (type: string, typeName: string) => void;
  next: () => void | null;
};

const Step1 = ({ clickSelData, next }: PropsTypsStep) => {
  const [currentNum, setNum] = useState<number>(0);
  const changeNum = (currentNum: number) => {
    setNum(currentNum);
  };

  return (
    <div className="step step1">
      <div className="step_layout step1">
        <div className="step_con">
          <h2>술 종류를 선택해주세요</h2>
          <ul>
            {type.map((list) => {
              return (
                <StepType
                  key={list.id}
                  url={list.url}
                  type={list.type}
                  id={list.id}
                  changeNum={changeNum}
                  currentNum={currentNum}
                />
              );
            })}
          </ul>
        </div>
        <div
          className="next-Btn"
          onClick={() => {
            clickSelData(type[currentNum - 1].type, 'type');
          }}
        >
          <button onClick={next}>다음</button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
