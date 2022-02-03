import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import alcholcup from '../../../modules/reducers/alcholcup';

const AlcholcupCard = ({ alcholcup }: any) => {
  const { alcholcupLists } = useSelector((state: any) => state.alcholcup);
  // console.log('alcholcupLists : ', alcholcupLists);

  const [alchols, setAlchols]: any = useState([]);
  const [displays, setDisplays]: any = useState([]);
  const [winners, setWinners]: any = useState([]);

  useEffect(() => {
    setAlchols(alcholcupLists);
    setDisplays([alcholcupLists[0], alcholcupLists[1]]);
    console.log('useEffect', alcholcupLists);
  }, []);

  console.log('display : ', displays);

  const clickHandler = (alchol: any) => () => {
    if (alchols.length <= 2) {
      if (winners.length === 0) {
        setDisplays(alchols);
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
      {displays.map((v: any) => {
        return (
          <>
            <div className="tableWrap" key={v.id}>
              <div className="table__box position-relative" key={v.id} onClick={clickHandler(v)}>
                <div className="table__img">
                  <img src={v.img} alt={v.id} />
                </div>
                <p>{v.name}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default AlcholcupCard;
