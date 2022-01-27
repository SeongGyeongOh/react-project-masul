import React from 'react';
import { useState, useEffect } from 'react';
import { AlcholcupTable } from '../components/AlcholcupTable';
import { data } from '../modules/data';
import styled from 'styled-components';

const AlcholDetails = styled.div`
  .alcholDetails__wrap {
    display: inline-block;
    border-bottom: 1px solid #000;
  }
`;

export const AlcholcupDetails = () => {
  const [alchol, setAlchol] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    data.sort(() => Math.random() - 0.5);

    // setAlchol(data);
    // setDisplays([data[0], data[1]]);
  }, []);

  return (
    <AlcholDetails>
      <div className="text-align-center margin-bottom-20 alcholDetails__wrap">
        술드컵 : 좋아하거나, 괜찮아 보이는 원탑 술을 골라봐요~!
      </div>
      <AlcholcupTable />
    </AlcholDetails>
  );
};
