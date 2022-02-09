import React, { useMemo } from 'react';
import { DataType } from '../../modules/sagas/alcholcup';
import Slider, { Settings } from 'react-slick';
import { Card } from 'antd';
import { Global } from './style';

// slick css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Meta } = Card;

export interface sliderProps {
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
  bannerLists: DataType[];
}

const TopFiveBanners = ({ bannerLists, autoplay = true, speed = 300, loop = true }: sliderProps) => {
  const data = [...bannerLists];

  const viewData = data.map((list, index) => (
    <div key={index}>
      <Card hoverable cover={<img src={list.img} alt={list.name} />}>
        <Meta title={list.name} description={list.description} />
      </Card>
    </div>
  ));

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

  return (
    <>
      <Global />
      <div className="top__title">
        <h2>
          <span>마</span>시고 싶은 <span>술</span>은 어떤 술인가요?
        </h2>
        <p>오늘의 한 잔은 당신과의 사랑을 위하여😘</p>
      </div>
      <Slider {...settings}>{viewData}</Slider>
    </>
  );
};

export default TopFiveBanners;
