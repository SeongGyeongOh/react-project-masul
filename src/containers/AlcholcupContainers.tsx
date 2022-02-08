import React, { useState, useCallback, useEffect } from 'react';
import { AlcholcupComponents } from '../components/AlcholcupComponents';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/reducers';
import Loading from '../components/Loading';
import { Button } from 'antd';
import { alcholRequestData } from '../modules/reducers/alcholcup';
import { DataType } from '../modules/data';
import RoundSelect from '../components/AlcholcupComponents/RoundSelect';
import AlcholcupTitle from '../components/AlcholcupComponents/AlcholcupTitle';

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
  alcholLists: DataType[];
};

export const AlcholcupContainers = () => {
  // dispatch
  const dispatch = useDispatch();

  // useSelector
  const alcholcupLists: DataType[] = useSelector((state: RootState) => state.alcholcup.data);

  // useState
  const [visible, setVisible] = useState(true);
  const [showAlcholcup, setShowAlcholcup] = useState(false);
  const [roundValue, setRoundValue] = useState(16);

  // datas
  const alcholLists = [...alcholcupLists].sort(() => Math.random() - 0.5).slice(0, roundValue);

  // 이벤트
  const loadAlcholDatas = useCallback(() => {
    setVisible(false);
    setShowAlcholcup(true);
    dispatch(alcholRequestData());
  }, []);

  const handleChange = useCallback((value) => {
    console.log(`selected ${value}`);
    setRoundValue(value);
  }, []);

  console.log(alcholLists);

  return (
    <AlcholDetails>
      <AlcholcupTitle />
      {visible ? <RoundSelect handleChange={handleChange} /> : null}
      {alcholcupLists.length < 0
        ? showAlcholcup && <Loading />
        : visible && (
            <Button className="alcholcupBtn" type="primary" onClick={loadAlcholDatas} style={{ display: 'block' }}>
              술드컵 시작🍺
            </Button>
          )}
      {showAlcholcup ? (
        <>
          <AlcholcupComponents alcholLists={alcholLists} roundValue={roundValue} />
        </>
      ) : (
        '준비중 입니다만,,,,🙈'
      )}

      <div>
        총 {alcholLists.length}개의 후보 중 무작위 {roundValue}개가 대결합니다.
      </div>
    </AlcholDetails>
  );
};
