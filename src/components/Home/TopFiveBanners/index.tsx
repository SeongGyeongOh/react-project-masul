import React from 'react';
import { Image } from 'antd';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000;
  padding: 0.5rem;
  border-radius: 1.5rem;

  img {
    flex: 0 0 20%;
    width: rem;
  }
  .banner__contents {
    flex: 0 0 78%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const TopFiveBanners = () => {
  return (
    <>
      <BannerWrapper className="banner__wrapper margin-bottom-20">
        <Image src="https://file.mk.co.kr/mkde/N0/2020/03/20200304_4411081_1583307027.jpg" />
        <div className="banner__contents">
          <div className="contents__name">발렌타인(17년)</div>
          <div className="contents__description">스모키한 훈제향과 매운맛이 강하면서도 목으로 넘어가는느낌이 soft.</div>
        </div>
      </BannerWrapper>
      <BannerWrapper className="banner__wrapper margin-bottom-20">
        <Image src="https://file.mk.co.kr/mkde/N0/2020/03/20200304_4411081_1583307027.jpg" />
        <div className="banner__contents">
          <div className="contents__name">발렌타인(17년)</div>
          <div className="contents__description">스모키한 훈제향과 매운맛이 강하면서도 목으로 넘어가는느낌이 soft.</div>
        </div>
      </BannerWrapper>
      <BannerWrapper className="banner__wrapper margin-bottom-20">
        <Image src="https://file.mk.co.kr/mkde/N0/2020/03/20200304_4411081_1583307027.jpg" />
        <div className="banner__contents">
          <div className="contents__name">발렌타인(17년)</div>
          <div className="contents__description">스모키한 훈제향과 매운맛이 강하면서도 목으로 넘어가는느낌이 soft.</div>
        </div>
      </BannerWrapper>
    </>
  );
};

export default TopFiveBanners;
