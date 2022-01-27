import React from 'react';
import { AlcholcupTable } from '../components/AlcholcupTable';
import styled from 'styled-components';

const AlcholDetails = styled.div`
  .alcholDetails__wrap {
    display: inline-block;
    border-bottom: 1px solid #000;
    width: 100%;
    font-size: 0.9rem;
    padding-bottom: 0.3rem;
  }
`;

export const AlcholcupDetails = () => {
  return (
    <AlcholDetails>
      <div className="text-align-center margin-bottom-20 alcholDetails__wrap">
        술드컵 : 좋아하거나, 괜찮아 보이는 원탑 술을 골라봐요~!
      </div>
      <AlcholcupTable />
    </AlcholDetails>
  );
};
