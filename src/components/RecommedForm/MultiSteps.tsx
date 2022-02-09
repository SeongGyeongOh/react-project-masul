import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Result from './Result';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { Steps, Step } from 'react-multistep-component';
import { RootState } from '../../modules/reducers';
import { reDataRequest, selDataRequest } from '../../modules/reducers/recommend';

const MultiSteps = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.recommend.recommendList);
  const clickSelData = (typeTest: string, typeName: string) => {
    dispatch(selDataRequest(typeTest, typeName, data));
  };

  const next = () => {
    const nextBtn: any = document.querySelector('.steps-nav-next');
    nextBtn.click();
  };

  return (
    <>
      <Steps>
        <Step>
          <div className="result">
            <div className="result_wrap">
              <h2>술 추천을 받고싶으시다면 계속해주세요!</h2>
              <Link to="/">
                <button>홈으로 돌아가기</button>
              </Link>
            </div>
            <div className="start-Btn">
              <button onClick={next}>시작하기</button>
            </div>
          </div>
        </Step>

        <Step>
          <Step1 clickSelData={clickSelData} next={next} />
        </Step>
        <Step>
          <Step2 clickSelData={clickSelData} next={next} />
        </Step>
        <Step>
          <Step3 clickSelData={clickSelData} next={next} />
        </Step>
        <Step>
          <Step4 clickSelData={clickSelData} next={next} />
        </Step>
        <Step>
          <Result />
        </Step>
      </Steps>
    </>
  );
};
export default MultiSteps;
