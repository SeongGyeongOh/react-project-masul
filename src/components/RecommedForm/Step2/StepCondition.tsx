import React, { useEffect, useState } from 'react';

interface ChildProps {
  id: number;
  url: string;
  txt: string;
  condition: string;
  clickSelData: (type: string ,typeName:string) => void;
  changeNum:(num:number) => void;
  currentNum:number;
}

const StepCondition = ({ id, url, txt, clickSelData,condition,changeNum,currentNum }: ChildProps) => {
  const [clickChild,setChild] = useState<string>('');

  useEffect(()=>{
    setChild('');
    if(id===currentNum){
      setChild('active');
      console.log(clickChild);
    }
  },[currentNum])


  return (
    <div
      key={id}
      onClick={() => {
        clickSelData(condition,'condition');
        changeNum(id);
      }}
      className={clickChild=='active' ? 'con_box active' : 'con_box'}
    >
      <div className="con_txt">{txt}</div>
      <div className="con_img">
        <img src={url} alt="img" />
      </div>
    </div>
  );
};

export default StepCondition;
