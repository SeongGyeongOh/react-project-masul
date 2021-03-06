import React, { useEffect, useState } from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

interface ChildProps {
  id: number;
  url: string;
  txt: string;
  feeling: string;
  changeNum: (num: number) => void;
  currentNum: number;
}

const StepFeeling = ({ id, url, txt, feeling, changeNum, currentNum }: ChildProps) => {
  const [clickChild, setChild] = useState<string>('');

  useEffect(() => {
    setChild('');
    if (id === currentNum) {
      setChild('active');
    }
  }, [currentNum]);

  return (
    <li
      onClick={() => {
        changeNum(id);
      }}
      className={clickChild == 'active' ? 'active' : ''}
      key={id}
    >
      <div className="li_img">
        <img src={url} />
      </div>
      <div className="li_txt">{txt}</div>
    </li>
  );
};

export default StepFeeling;
