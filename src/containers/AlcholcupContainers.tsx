import React from 'react';
import { AlcholcupTable } from '../components/AlcholcupTable';
import styled from 'styled-components';
import AlcholcupTitle from '../components/AlcholcupTable/AlcholcupTitle/index';

const AlcholDetails = styled.div`
  .alcholDetails__wrap {
    display: inline-block;
    border-bottom: 1px solid #000;
    width: 100%;
    font-size: 0.9rem;
    padding-bottom: 0.3rem;
  }
`;

export const AlcholcupContainers = ({ alcholcup }: any) => {
  // const datas: any = useSelector((state: any) => state.alcholcup);

  return (
    <AlcholDetails>
      <AlcholcupTitle />
      <AlcholcupTable alcholcup={alcholcup} />
    </AlcholDetails>
  );
};
