import React, { useEffect } from 'react';
import RecommendForm from '../components/RecommedForm/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/reducers';
import { recomDataRequest } from '../modules/reducers/recommend';

const RecommendDetails = () => {
  // useDispatch 디스패치
  // useSelector 데이터 가져오기
  const dispatch = useDispatch();


  useEffect(() => {
    // dispatch(recomDataRequest());
    // recommendData()
    dispatch(recomDataRequest());

  }, []);
 

  return (
    <div className="recommendDetails_wrap" >
      <RecommendForm/>
    </div>
  );
};

export default RecommendDetails;
