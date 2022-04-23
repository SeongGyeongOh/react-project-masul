import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DataType } from '../../modules/sagas/alcholcup';
import { AlcholStyled } from './styled';

type AlcholcupType = {
  alcholLists: DataType[];
  roundValue: number;
};

const DescWrapper = styled.ul`
  font-size: 1rem;
  margin: 0;

  li {
    padding: 0.5rem 0;
  }
`;

export const AlcholcupComponents = ({ alcholLists, roundValue }: AlcholcupType) => {
  const [alchols, setAlchols] = useState(alcholLists);
  const [displays, setDisplays] = useState<DataType[]>([]);
  const [winners, setWinners] = useState<DataType[]>([]);
  const [value, setValue] = useState<boolean>(false);
  const [winnerText, setWinnerText] = useState<string>('');
  const [selectRound, setSelectRound] = useState<number>(roundValue);
  let [rounds, setRounds] = useState<number>(1);

  useEffect(() => {
    setDisplays([alchols[0], alchols[1]]);
  }, [alchols]);

  const onDescription = useCallback(() => {
    setValue(true);
  }, []);

  const clickHandler = (alchol: DataType) => () => {
    if (alchols.length <= 2) {
      setSelectRound(alchols.length);
      if (winners.length === 0) {
        setDisplays([alchol]);
        onDescription();
        setWinnerText('우승');
      } else {
        let updatedAlchol: DataType[] = [...winners, alchol];
        setAlchols(updatedAlchol);
        setDisplays([updatedAlchol[0], updatedAlchol[1]]);
        setWinners([]);
        setSelectRound(updatedAlchol.length);
        setRounds(rounds - updatedAlchol.length + 1);
      }
    } else if (alchols.length > 2) {
      setWinners([...winners, alchol]);
      setDisplays([alchols[2], alchols[3]]);
      setAlchols(alchols.slice(2));
      setRounds(rounds + 1);
    }
  };

  return (
    <>
      <AlcholStyled>
        {!value ? (
          <div className="rounds">
            {selectRound}강 : {rounds}/ {selectRound / 2}
          </div>
        ) : (
          <div className="rounds">
            {winnerText}
            <br />
            <span>{displays[0].name}</span>
          </div>
        )}
        {displays.map((drinks) => {
          return (
            <div className="tableWrap" key={drinks.id}>
              <div className="table__box position-relative" key={drinks.id} onClick={clickHandler(drinks)}>
                <div className="table__img">
                  <img src={drinks.img} alt={drinks.name} />
                </div>
                <p>{drinks.name}</p>
              </div>
            </div>
          );
        })}
        {!value ? null : (
          <DescWrapper>
            <li className="medium">
              술 이름 : <span className="bold">{displays[0].name}</span>
            </li>
            <li className="medium">
              술 종류 : <span className="bold">{displays[0].type}</span>
            </li>
            <li className="medium">
              술 맛 : <span className="bold">{displays[0].taste}</span>
            </li>
            <li className="medium">
              술 설명 : <span className="bold">{displays[0].description}</span>
            </li>
          </DescWrapper>
        )}
      </AlcholStyled>
    </>
  );
};
