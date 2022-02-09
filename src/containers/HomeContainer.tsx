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
  // dispatch
  const dispatch = useDispatch();

  // useSelector
  const data: DataType[] = useSelector((state: RootState) => state.alcholcup.data);

  // datas
  const bannerLists = [...data].sort(() => Math.random() - 0.5).slice(0, 5);

  // useEffect
  useEffect(() => {
    dispatch(alcholRequestData());
  }, []);

  return (
    <SlideWrapper>
      {bannerLists.length > 0 ? <TopFiveBanners bannerLists={bannerLists} /> : '준비중입니다,.,,,'}
    </SlideWrapper>
  );
};
