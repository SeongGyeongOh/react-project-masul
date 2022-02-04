import React from 'react';
import styled from 'styled-components';

type lastProps = {
  lastDesc: string;
  lastName: string;
  lastType: string;
  lastAlc: number;
};

const DescWrapper = styled.ul`
  font-size: 1rem;
  margin: 0;
`;

const AlcholcupDesc = ({ lastDesc, lastName, lastType, lastAlc }: lastProps) => {
  return (
    <DescWrapper>
      <li>술 이름 : {lastName}</li>
      <li>술 종류 : {lastType}</li>
      <li>술 도수 : {lastAlc}</li>
      <li>술 설명 : {lastDesc}</li>
    </DescWrapper>
  );
};

export default AlcholcupDesc;
