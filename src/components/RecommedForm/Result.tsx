import { data } from 'jquery';
import {Link} from 'react-router-dom'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules/reducers';

type Props = {
  ResultData : () => void;
};

const Result = ({ResultData}: Props) => {


  const resultData = useSelector((state:RootState)=>state.recommend.recommendList)

  const again = ()=>{
    window.location.replace("/recommend");
  }


  return (
    <div className="result">
      <div className ="result_wrap">
        <h2 >결과</h2>
        {resultData.length > 0 ? (
        <ul>
          <li className="img"><img src={resultData[0].img} alt={resultData[0].name}/></li>
          <li><span>술 이름</span> <br/> {resultData[0].name}</li>
          <li><span>도수</span> <br/>{resultData[0].alc}</li>
          <li><span>가격</span> <br/>{resultData[0].price}</li>
          <li><span>설명</span> <br/>{resultData[0].description}</li>
        </ul>
      ):(
        <div>추천해드릴 술이 없습니다ㅠㅠ.... </div>
      )}
        <button onClick={again}>다시해보기</button>
      </div>
    </div>
 );
};

export default Result;
