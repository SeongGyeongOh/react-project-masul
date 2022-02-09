import { data } from 'jquery';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules/reducers';

const Result = () => {
  const resultData = useSelector((state: RootState) => state.recommend.recommendList);

  const randomData = (resultData: any) => {
    return resultData[Math.floor(Math.random() * resultData.length)];
  };

  randomData(resultData);
  console.log(randomData(resultData));
  const recommendRandom = randomData(resultData);

  const again = () => {
    window.location.replace('/recommend');
  };
  const home = () => {
    window.location.replace('/');
  };

  return (
    <div className="result">
      <div className="result_wrap">
        <h2>결과</h2>
        {resultData.length > 0 ? (
          <ul>
            <li className="img">
              <img src={recommendRandom.img} alt={recommendRandom.name} />
            </li>
            <li>
              <span>술 이름</span> <br /> {recommendRandom.name}
            </li>
            <li>
              <span>도수</span> <br />
              {recommendRandom.alc}도
            </li>
            <li>
              <span>가격</span> <br />
              {recommendRandom.price}원
            </li>
            <li>
              <span>설명</span> <br />
              {recommendRandom.description}
            </li>
          </ul>
        ) : (
          <div>추천해드릴 술이 없습니다ㅠㅠ.... </div>
        )}
        <button onClick={again}>다시해보기</button>
        <div className="start-Btn">
          <button onClick={home}>홈으로가기</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
