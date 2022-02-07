import React, { useCallback, useEffect, useState } from 'react';
import { DataType } from '../../modules/data';
import { Global, AlcholStyled } from './styled';

type AlcholcupType = {
  alcholLists: DataType[];
  roundValue: number;
};

export const AlcholcupComponents = ({ alcholLists, roundValue }: AlcholcupType) => {
  const [alchols, setAlchols]: any = useState([]);
  const [displays, setDisplays]: any = useState([]);
  const [winners, setWinners]: any = useState([]);
  const [value, setValue]: any = useState(false);
  let [rounds, setRounds]: any = useState(roundValue);

  useEffect(() => {
    setAlchols(alcholLists);
    setDisplays([alcholLists[0], alcholLists[1]]);
  }, []);

  const onDescription = useCallback(() => {
    setValue(true);
  }, []);

  const clickHandler = (alchol: any) => () => {
    if (alchols.length <= 2) {
      if (winners.length === 0) {
        setDisplays([alchol]);
        onDescription();
      } else {
        let updatedAlchol = [...winners, alchol];
        setAlchols(updatedAlchol);
        setDisplays([updatedAlchol[0], updatedAlchol[1]]);
        setWinners([]);
      }
    } else if (alchols.length > 2) {
      setWinners([...winners, alchol]);
      setDisplays([alchols[2], alchols[3]]);
      setAlchols(alchols.slice(2));
    }
  };
  console.log('winners : ', winners);

  return (
    <>
      <Global />
      <AlcholStyled>
        {displays.map((drinks: any) => {
          return (
            <div className="tableWrap" key={drinks.id}>
              <div className="table__box position-relative" key={drinks.id} onClick={clickHandler(drinks)}>
                <div className="table__img">
                  <img src={drinks.img} alt={drinks.id} />
                </div>
                <p>{drinks.name}</p>
              </div>
            </div>
          );
        })}
        {winners !== 0 ? (
          <div>
            현재 {roundValue}강 : {rounds}
          </div>
        ) : null}
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
