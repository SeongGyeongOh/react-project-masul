import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HomeContainer } from '../../containers/HomeContainer';
import { DataType } from '../../modules/sagas/alcholcup';

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

// interface itemsProps {
//   img: string;
//   name: string;
// }

const SliderItem = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

type BannersType = {
  bannerLists: DataType[];
};

const TopFiveBanners = ({ bannerLists }: BannersType) => {
  // console.log('TopFiveBanners : ', bannerLists);

  const [data, setData] = useState(bannerLists);

  useEffect(() => {
    setData([...bannerLists]);
    console.log(bannerLists);
  }, [bannerLists]);

  return (
    <>
      {/* <HomeContainer> */}
      {data.map((item, index) => (
        <SliderItem key={index}>
          <img src={item.img} alt={item.name} />
        </SliderItem>
      ))}
      {/* </HomeContainer> */}
      {data.map((value, index) => {
        return (
          <SliderItem key={index}>
            <div className="banner__imgBox">
              <img style={{ width: '100%' }} src={value.img} alt={value.name} />
            </div>
            <div className="banner__contents">
              <div className="contents__name">{value.name}</div>
              <div className="contents__description">{value.description}</div>
            </div>
          </SliderItem>
        );
      })}
    </>
  );
};

export default TopFiveBanners;
