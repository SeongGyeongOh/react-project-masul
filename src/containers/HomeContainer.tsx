import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/reducers';
import { alcholcupProps, alcholRequestData } from '../modules/reducers/alcholcup';
import { DataType } from '../modules/sagas/alcholcup';
import styled from 'styled-components';
import TopFiveBanners from '../components/TopFiveBanners';

export type HomeType = {
  data: alcholcupProps[];
};

const SlideWrapper = styled.section`
  position: relative;
  height: 300px;
`;

export const HomeContainer = () => {
  const [banenrList, setBannerList] = useState<DataType[]>([]);
  // dispatch
  const dispatch = useDispatch();

  // useSelector
  const data: DataType[] = useSelector((state: RootState) => state.alcholcup.data);

  useEffect(() => {
    if (data) {
      const bannerLists = [...data].sort(() => Math.random() - 0.5).slice(0, 5);
      setBannerList(bannerLists);
    }
  }, [data]);

  // useEffect
  useEffect(() => {
    dispatch(alcholRequestData());
  }, [dispatch]);

  return (
    <SlideWrapper>
      {banenrList.length > 0 ? <TopFiveBanners bannerLists={banenrList} /> : '준비중입니다,.,,,'}
    </SlideWrapper>
  );
};
