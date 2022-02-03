import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AlcholcupCard from './AlcholcupCard';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { alcholRequestData, alcholSuccessData } from '../../modules/reducers/alcholcup';

const AlcholStyled = styled.div`
  Button {
    margin: 1rem 1rem 1rem 0;
  }

  .tableWrap {
    padding: 5px;

    .table__box {
      text-align: center;
      width: 100%;
      height: 18rem;
      background-color: #ddd;
      margin-bottom: 20px;
      border: 1px solid #000;

      img {
        width: 100%;
        height: 17.8rem;
        object-fit: contain;
      }
      p {
        font-size: 1.6rem;
        background-color: #000000b5;
        color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 2%;
      }
    }
  }
  .round {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 20px;
  }
`;

export const AlcholcupTable = ({ alcholcup }: any) => {
  const [isAlcholLoading, setIsAlcholLoading] = useState(false);
  const dispatch = useDispatch();

  const loadAlcholDatas = useCallback(() => {
    // dispatch(alcholRequestData());
    setIsAlcholLoading(true);
  }, []);

  useEffect(() => {
    dispatch(alcholRequestData());
  }, []);

  // const { alcholcupLists } = useSelector((state: any) => state.alcholcup);
  // // console.log('alcholcupLists : ', alcholcupLists);

  // const [alchols, setAlchols]: any = useState([]);
  // const [displays, setDisplays]: any = useState([]);
  // const [winners, setWinners]: any = useState([]);

  // useEffect(() => {
  //   alcholcupLists.sort(() => Math.random() - 0.5).slice(0, 64);

  //   setAlchols(alcholcupLists);
  //   setDisplays([alcholcupLists[0], alcholcupLists[1]]);
  //   console.log('useEffect', alcholcupLists.sort(() => Math.random() - 0.5).slice(0, 64));
  // }, []);

  return (
    <>
      <AlcholStyled>
        <Button type="primary" onClick={loadAlcholDatas}>
          {'진행중' ? '술드컵 시작' : '진행중...'}
        </Button>
        {isAlcholLoading ? <AlcholcupCard alcholcup={alcholcup} key={alcholcup} /> : null}
        {/* <div className="round">현재 라운드 진행상황 : 64 / 64</div> */}
      </AlcholStyled>
    </>
  );
};
