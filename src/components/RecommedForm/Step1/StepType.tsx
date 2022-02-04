import React, { useState, useEffect } from 'react';

interface ChildProps {
  id: number;
  url: string;
  type: string;
  parentType: string;
  updateType: (arg: string) => void;
}

const StepType = ({ id, url, type, parentType, updateType }: ChildProps) => {
  const [isType, setType] = useState<boolean>(false);

  useEffect(() => {
    if (isType) {
      setType(!isType);
    } else {
      setType(!isType);
    }
  }, [parentType]);

  const typeCl = () => {
    setType(!isType);
  };
  return (
    <li key={id}>
      <div
        onClick={() => {
          typeCl;
          console.log(isType);
          updateType(type);
        }}
        className={isType ? 'li_img active' : 'li_img'}
      >
        <img src={url} />
      </div>
      <div onClick={typeCl} className={isType ? 'li_txt active' : 'li_txt'}>
        {type}
      </div>
    </li>
  );
};

export default StepType;
