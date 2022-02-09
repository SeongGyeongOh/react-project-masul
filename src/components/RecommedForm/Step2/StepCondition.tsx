import React, { useEffect, useState } from 'react';

interface ChildProps {
  id: number;
  url: string;
  txt: string;
  condition: string;
  changeNum: (num: number) => void;
  currentNum: number;
}

const StepCondition = ({ id, url, txt, condition, changeNum, currentNum }: ChildProps) => {
  const [clickChild, setChild] = useState<string>('');

  useEffect(() => {
    setChild('');
    if (id === currentNum) {
      setChild('active');
    }
  }, [currentNum]);

  return (
    <div
      key={id}
      onClick={() => {
        changeNum(id);
      }}
      className={clickChild == 'active' ? 'con_box active' : 'con_box'}
    >
      <div className="con_txt">{txt}</div>
      <div className="con_img">
        <img src={url} alt="img" />
      </div>
    </div>
  );
};

export default StepCondition;
