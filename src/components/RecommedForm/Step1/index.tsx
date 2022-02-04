import { List } from 'antd/lib/form/Form';
import React, { useState, useEffect } from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
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
  dataType: (arg: string) => void;
};

const Step1 = ({ dataType }: PropsTypsStep) => {
  //StepType 자식에게 보내는 용의 useState
  const [parentType, setParentType] = useState<string>('');

  //StepType 자식이 클릭한 type값을 가져와서 필터 함수를 걸어, result라는 변수에 담음
  const updateType = (parentType: string): void => {
    setParentType(parentType);
  };

  //parentType이 변경될 떄마다 dataType에 result를 담아 부모에게 전달!
  useEffect(() => {
    dataType(parentType);
  }, [parentType]);

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
                  id={0}
                  parentType={parentType}
                  updateType={updateType}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Step1;
