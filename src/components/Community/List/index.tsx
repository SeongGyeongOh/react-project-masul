import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';
import './CommunityList.scss';

const CommunityList = () => {
  const { Column } = Table;

  const TableBox = styled(Table)`
    width: 100%;
    background-color: red;
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
    <TableBox dataSource={data} className="table__list">
      <Column title="글번호" dataIndex="articleNumber" key="articleNumber" width={10} />
      <Column title="제목" dataIndex="title" key="title" width={30} />
      <Column title="닉네임" dataIndex="nickName" key="nickName" width={20} />
      <Column title="등록일" dataIndex="registrationDate" key="registrationDate" width={20} />
      <Column title="조회수" dataIndex="views" key="views" width={20} />
      <Column title="좋아요" dataIndex="heart" key="heart" width={20} />
    </TableBox>
  );
};
export default CommunityList;
