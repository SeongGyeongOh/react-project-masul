import React, { useEffect, useState } from 'react';

interface ChildProps {
  id: number;
  taste: string;
  txt: string;
  changeNum: (num: number) => void;
  currentNum: number;
}

const StepTaste = ({ id, txt, taste, changeNum, currentNum }: ChildProps) => {
  const [clickChild, setChild] = useState<string>('');

  useEffect(() => {
    setChild('');
    if (id === currentNum) {
      setChild('active');
      console.log(clickChild);
    }
  }, [currentNum]);

  return (
    <div
      key={id}
      onClick={() => {
        changeNum(id);
      }}
      className={clickChild === 'active' ? 'con_box active' : 'con_box'}
    >
      <div className={clickChild === 'active' ? 'con_txt active' : 'con_txt'}>{txt}</div>
    </div>
  );
};

export default StepTaste;
