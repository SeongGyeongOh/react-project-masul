import React from 'react';
import RecommendForm from '../components/RecommedForm/index';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from '../modules/reducers/recommend';
import { RootState } from '../modules/reducers';

const RecommendDetails = () => {
  // useDispatch 디스패치
  // useSelector 데이터 가져오기
  const dispatch = useDispatch();
  const recommendData = () => {
    dispatch(loadData);
  };

  const data = useSelector((state: RootState) => state.recommend.recomData);

  // const recomData = useSelector(state => state.)

  return (
    <div className="recomendDetails_wrap">
      <RecommendForm recommendData={recommendData} data={data} />
    </div>
  );
};

export default RecommendDetails;
