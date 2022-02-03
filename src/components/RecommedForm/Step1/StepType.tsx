import React, { useState } from 'react';

interface ChildProps {
  id: number;
  url: string;
  type: string;
  // stateCh: (e: any) => void;
  // data: boolean;
}

const StepType = ({ id, url, type }: ChildProps) => {
  const [isType, setType] = useState<boolean>(false);
  const typeCl = () => {
    setType(!isType);
  };
  return (
    <li key={id}>
      <div onClick={typeCl} className={isType ? 'li_img active' : 'li_img'}>
        <img src={url} />
      </div>
      <div onClick={typeCl} className={isType ? 'li_txt active' : 'li_txt'}>
        {type}
      </div>
    </li>
  );
};

export default StepType;
