import React from 'react';
import styled from 'styled-components';

const AlcholStyled = styled.div`
  .tableWrap {
    padding: 5px;

    .table__box {
      text-align: center;
      width: 300px;
      height: 300px;
      background-color: #ddd;
      margin-bottom: 10px;
      p {
        font-size: 20px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 2%;
      }
    }
  }
`;

export const AlcholcupTable = () => {
  return (
    <AlcholStyled>
      <div className="tableWrap">
        <div className="table__box position-relative">
          <div className="table__img">
            <img src="" alt="" />
          </div>
          <p>햄버거</p>
        </div>
        <div className="table__box position-relative">
          <div className="table__img">
            <img src="" alt="" />
          </div>
          <p>라멘</p>
        </div>
      </div>
    </AlcholStyled>
  );
};
