import React, { useState } from 'react';

interface ChildProps {
  id: number;
  url: string;
  txt: string;
}

const StepFeeling = ({ id, url, txt }: ChildProps) => {
  const [isFeeling, setFeeling] = useState<boolean>(false);
  const feelingCl = () => {
    setFeeling(!isFeeling);
  };

  return (
    <li key={id}>
      <div onClick={feelingCl} className={isFeeling ? 'li_img active' : 'li_img'}>
        <img src={url} />
      </div>
      <div onClick={feelingCl} className={isFeeling ? 'li_txt active' : 'li_txt'}>
        {txt}
      </div>
    </li>
  );
};

export default StepFeeling;
