import React, { useState,useEffect } from 'react';

interface ChildProps {
  id: number;
  url: string;
  type: string;
  clickSelData : (type: string,typeName:string) => void;
  changeNum:(num:number) => void;
  currentNum:number;
}

const StepType = ({ id, url, type, clickSelData,changeNum,currentNum }: ChildProps) => {
  const [clickChild,setChild] = useState<string>('');

  useEffect(()=>{
    setChild('');
    if(id===currentNum){
      setChild('active');
    }
  },[currentNum])


  return (
    <li key={id} className={clickChild}>
      <div
        onClick={() => {
          changeNum(id);
          console.log(id);
          clickSelData(type,'type');
        }}
        className='li_img'
      >
        <img src={url} />
      </div>
      <div className='li_txt'>
        {type}
      </div>
    </li>
  );
};

export default StepType;
