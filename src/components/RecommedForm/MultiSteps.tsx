import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Result from './Result';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import logoBg from '../../assets/logo/logo_main.png';
import Icon from '../../const/Icons/Icon';
import { Steps, Step } from 'react-multistep-component';
import { RootState } from '../../modules/reducers';
import { selDataRequest } from '../../modules/reducers/recommend';

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
          <div className="start_wrap">
            <div className="start_img">
              <img src={logoBg} alt="logo" />
            </div>
            <div className="start_txt">
              <h2>
                술 추천을 받고싶다면
                <br />
                시작을 눌러주세요!
              </h2>
            </div>
            <div className="home_btn">
              <Link to="/">
                <Icon size={30} color={'#fff'} icon="home" />
              </Link>
            </div>
            <div className="next_btn">
              <button onClick={next}>Start!</button>
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
