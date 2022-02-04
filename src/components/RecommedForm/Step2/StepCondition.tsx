import React, { useState } from 'react';

interface ChildProps {
  id: number;
  url: string;
  txt: string;
}

const StepCondition = ({ id, url, txt }: ChildProps) => {
  const [isCon, setCon] = useState<boolean>(false);
  const conCl = () => {
    setCon(!isCon);
  };

  return (
    <div key={id} onClick={conCl} className={isCon ? 'con_box active' : 'con_box'}>
      <div className="con_txt">{txt}</div>
      <div className="con_img">
        <img src={url} alt="img" />
      </div>
    </div>
  );
};

export default StepCondition;
