import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';
import './CommunityList.scss';

const CommunityList = () => {
  const { Column } = Table;

  const TableBox = styled(Table)`
    width: 100%;
    backgroundcolor: red;
  `;

  const data = [
    {
      key: 1, // key
      articleNumber: 1, // 글번호
      title: '마정한바보', // 제목
      nickName: '빛나리', // 닉네임
      registrationDate: '2022-01-27 15:42', // 등록일
      views: 0, // 조회수
      heart: 9, // 좋아요
    },
    {
      key: 2, // key
      articleNumber: 2, // 글번호
      title: '둥근해가 떳습니다', // 제목
      nickName: '태양', // 닉네임
      registrationDate: '2022-01-27 11:42', // 등록일
      views: 1, // 조회수
      heart: 3, // 좋아요
    },
    {
      key: 3, // key
      articleNumber: 3, // 글번호
      title: '해가 저물어갑니다', // 제목
      nickName: '달', // 닉네임
      registrationDate: '2022-01-27 17:42', // 등록일
      views: 2, // 조회수
      heart: 4, // 좋아요
    },
  ];

  return (
    <div className="community">
      <div className="community__box">
        <div className="community__box__left">
          <div className="community__box__left__box">J</div>
        </div>
        <div className="community__box__right">
          <div className="community__box__right__title">
            <input type="text" placeholder="제목" />
          </div>
          <div className="community__box__right__content">
            <div className="community__box__right__content__input">
              <input type="text" placeholder="내용" />
            </div>
            <div className="community__box__right__content__btn">
              <button>글쓰기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommunityList;
