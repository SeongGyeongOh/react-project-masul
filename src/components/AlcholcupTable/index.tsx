import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from '../../const/Icons/Icon';
import { data } from '../../modules/data';

const AlcholStyled = styled.div`
  .tableWrap {
    padding: 5px;

    .table__box {
      text-align: center;
      width: 100%;
      height: 19rem;
      background-color: #ddd;
      margin-bottom: 10px;
      p {
        font-size: 1.6rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 2%;
      }
    }
  }
`;

export const AlcholcupTable = () => {
  const [alchol, setAlchol] = useState([data]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    data.sort(() => Math.random() - 0.5).slice(0, 64);

    setAlchol([data]);
    // setDisplays([data[0], data[1]]);
  }, []);

  console.log(data.sort(() => Math.random() - 0.5).slice(0, 64));
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
