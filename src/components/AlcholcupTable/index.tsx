import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import AlcholcupCard from './AlcholcupCard';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AlcholStyled } from './styled';
import { alcholRequestData } from '../../modules/reducers/alcholcup';
import Loading from '../Loading';

export const AlcholcupTable = ({ alcholcup }: any) => {
  const [showAlcholcup, setShowAlcholcup] = useState(false);
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  const { alcholLoading } = useSelector((state: any) => state.alcholcup);

  const loadAlcholDatas = useCallback(() => {
    setShowAlcholcup(true);
    setVisible(false);
  }, []);

  useEffect(() => {
    dispatch(alcholRequestData());
  }, []);

  return (
    <>
      <AlcholStyled>
        {alcholLoading
          ? !showAlcholcup && <Loading />
          : visible && (
              <Button className="alcholcupBtn" type="primary" onClick={loadAlcholDatas}>
                술드컵 시작🍺
              </Button>
            )}
        {showAlcholcup ? <AlcholcupCard alcholcup={alcholcup} /> : null}
        {/* <div className="round">현재 라운드 진행상황 : 64 / 64</div> */}
      </AlcholStyled>
    </>
  );
};
