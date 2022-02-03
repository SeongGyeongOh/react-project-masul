import React from 'react';
import './CommunityList.scss';

type DataProps = {
  key: number;
  title: string;
  content: string;
  nickName: string;
  date: string;
  heart: number;
};

type dataTaype = {
  data: DataProps[];
};

const CommunityList = ({ data }: dataTaype) => {
  console.log(data);
  //   const data = [
  //     {
  //       key: 1, // key
  //       title: '마정한바보', // 제목
  //       content: '멍청청', // 내용
  //       nickName: '빛나리', // 닉네임
  //       date: '2022-01-27 15:42', // 등록일
  //     },
  //   ];

  return (
    <div className="community">
      <div className="community__top">
        <div className="community__top__nickname">
          <span>J</span>
        </div>
        <div className="community__top__title"></div>
      </div>
      <div className="community__middle"></div>
      <div className="community__bottom"></div>
    </div>
  );
};
export default CommunityList;
