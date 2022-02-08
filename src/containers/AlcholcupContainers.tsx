import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/reducers';
import { Button, Card } from 'antd';
import { alcholRequestData } from '../modules/reducers/alcholcup';
import RoundSelect from '../components/AlcholcupComponents/RoundSelect';
import AlcholcupTitle from '../components/AlcholcupComponents/AlcholcupTitle';
import { DataType } from '../modules/sagas/alcholcup';
import { AlcholcupComponents } from '../components/AlcholcupComponents';
import Loading from '../components/Loading';
import { Global } from '../components/AlcholcupComponents/styled';
import Img from '../assets/logo/logo_main.png';

const AlcholDetails = styled.div`
  .alcholDetails__wrap {
    display: inline-block;
    border-bottom: 1px solid #000;
    width: 100%;
    font-size: 0.9rem;
    padding-bottom: 0.3rem;
  }
`;

export type AlcholcupType = {
  visible: boolean;
  showAlcholcup: boolean;
  roundValue: number | undefined;
  value: number;
  data: DataType[];
};

export const AlcholcupContainers = () => {
  const { Meta } = Card;

  // dispatch
  const dispatch = useDispatch();

  // useSelector
  const data: DataType[] = useSelector((state: RootState) => state.alcholcup.data);

  // useState
  const [visible, setVisible] = useState(true);
  const [showAlcholcup, setShowAlcholcup] = useState(false);
  const [roundValue, setRoundValue] = useState(16);

  // datas
  const alcholLists = [...data].sort(() => Math.random() - 0.5).slice(0, roundValue);

  // 이벤트
  const loadAlcholDatas = useCallback((data) => {
    setVisible(false);
    setShowAlcholcup(true);
    dispatch(alcholRequestData(data));
  }, []);

  const handleChange = useCallback((value) => {
    console.log(`selected ${value}`);
    setRoundValue(value);
  }, []);

  console.log('alcholLists : ', alcholLists);

  return (
    <AlcholDetails>
      <Global />
      <AlcholcupTitle />
      {visible ? <RoundSelect handleChange={handleChange} /> : null}
      {data.length < 0
        ? showAlcholcup
        : visible && (
            <>
              <Card
                onClick={loadAlcholDatas}
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="술드컵" src={Img} />}
              >
                <Meta title="술드컵 시작🍺" />
              </Card>
            </>
          )}
      {showAlcholcup
        ? alcholLists.length > 0 && (
            <div>
              <AlcholcupComponents alcholLists={alcholLists} roundValue={roundValue} />
            </div>
          )
        : null}
      <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
        총 {data.length}개의 후보 중 무작위 {roundValue}개가 대결합니다.
      </div>
    </AlcholDetails>
  );
};
