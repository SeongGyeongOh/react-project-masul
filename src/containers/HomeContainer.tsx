import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/reducers';
import { alcholcupProps, alcholRequestData } from '../modules/reducers/alcholcup';
import { DataType } from '../modules/sagas/alcholcup';
import Slider, { Settings } from 'react-slick';

// slick css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import TopFiveBanners from '../components/TopFiveBanners';

export interface sliderProps {
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

export type HomeType = {
  data: alcholcupProps[];
  useEffect: () => void;
};

const SlideWrapper = styled.section`
  position: relative;
  height: 300px;
`;

const SliderItem = styled.div`
  width: 100%;
  height: 300px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const HomeContainer = ({ className, autoplay = true, speed = 300, loop = true }: sliderProps) => {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
    }),
    [autoplay, loop, speed],
  );

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
    <SlideWrapper className={className}>
      {/* <Slider>
        <div>asdasd</div>
      </Slider> */}
      <Slider {...settings}>
        {/* <TopFiveBanners bannerLists={bannerLists} /> */}
        {bannerLists.map((item, index) => (
          <SliderItem key={index}>
            <div className="banner__imgBox">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="banner__contents">
              <div className="contents__name">{item.name}</div>
              <div className="contents__description">{item.description}</div>
            </div>
          </SliderItem>
        ))}
      </Slider>
    </SlideWrapper>
  );
};
