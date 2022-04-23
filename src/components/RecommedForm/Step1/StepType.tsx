import React, { useState, useEffect } from 'react';

interface ChildProps {
  id: number;
  url: string;
  type: string;
  changeNum: (num: number) => void;
  currentNum: number;
}

const StepType = ({ id, url, type, changeNum, currentNum }: ChildProps) => {
  const [clickChild, setChild] = useState<string>('');

  useEffect(() => {
    setChild('');
    if (id === currentNum) {
      setChild('active');
    }
  }, [currentNum, id]);

  return (
    <li key={id} className={clickChild}>
      <div
        onClick={() => {
          changeNum(id);
        }}
        className="li_img"
      >
        <img src={url} alt="no imgae" />
      </div>
      <div className="li_txt">{type}</div>
    </li>
  );
};

export default StepType;
