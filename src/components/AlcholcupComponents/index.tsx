import React, { useCallback, useEffect, useState } from 'react';
import { DataType } from '../../modules/data';
import { Global, AlcholStyled } from './styled';

type AlcholcupType = {
  alcholLists: DataType[];
  roundValue: number;
};

export const AlcholcupComponents = ({ alcholLists, roundValue }: AlcholcupType) => {
  const [alchols, setAlchols]: any = useState(alcholLists);
  const [displays, setDisplays]: any = useState([]);
  const [winners, setWinners]: any = useState([]);
  const [value, setValue]: any = useState(false);
  const [winnerText, setWinnerText]: any = useState('');
  const [selectRound, setSelectRound]: any = useState(roundValue);
  let [rounds, setRounds]: any = useState(1);

  useEffect(() => {
    setDisplays([alchols[0], alchols[1]]);
  }, []);

  // console.log('초기 display : ', displays);

  const onDescription = useCallback(() => {
    setValue(true);
  }, []);

  const clickHandler = (alchol: any) => () => {
    if (alchols.length <= 2) {
      setSelectRound(alchols.length);
      if (winners.length === 0) {
        setDisplays([alchol]);
        onDescription();
        setWinnerText('우승');
      } else {
        let updatedAlchol = [...winners, alchol];
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
  // console.log('클릭 된 winners : ', winners);

  return (
    <>
      <Global />
      <AlcholStyled>
        {!value ? (
          <div className="rounds">
            {selectRound}강 : {rounds}/ {selectRound / 2}
          </div>
        ) : (
          <div className="rounds">
            {winnerText}
            <br />
            <span>{alchols[0].name}</span>
          </div>
        )}
        {displays.map((drinks: any) => {
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
      </AlcholStyled>
      {/* <Image src={v.img} alt={v.name} /> */}
      {/* <span>{winners.length === 0 && <HeartTwoTone twoToneColor={colors} />}</span> */}
      {/* </div>
              <p>{v.name}</p>
            </div>
          </div>
        );
      })}
      {!value ? <div className="round">현재 16강 : {round}</div> : null}
      {value ? <AlcholcupDesc lastDesc={lastDesc} lastName={lastName} lastType={lastType} lastAlc={lastAlc} /> : null} */}
      {/* {value ? <div>{alcholcupLists[0].description}</div> : null} */}
      {/* {likes ? <LikeButton onClick={addLikes} /> : null} */}
      {/* <LikeButton onClick={addLikes} /> */}
    </>
  );
};
