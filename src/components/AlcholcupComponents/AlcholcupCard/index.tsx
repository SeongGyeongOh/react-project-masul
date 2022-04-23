import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { Image } from 'antd';
import { Global } from '../styled';
// import { HeartTwoTone } from '@ant-design/icons';
// import LikeButton from '../LikeButton';
import AlcholcupDesc from '../AlcholcupDesc';

const AlcholcupCard = ({ alcholcup }: any) => {
  const { alcholcupLists } = useSelector((state: any) => state.alcholcup);

  const [alchols, setAlchols]: any = useState([]);
  const [displays, setDisplays]: any = useState([]);
  const [winners, setWinners]: any = useState([]);
  const [value, setValue]: any = useState(false);
  const [round, setRound]: any = useState(alcholcupLists.length);

  useEffect(() => {
    setAlchols(alcholcupLists);
    setDisplays([alcholcupLists[0], alcholcupLists[1]]);
  }, [alcholcupLists]);

  const onDescription = useCallback(() => {
    setValue(true);
  }, []);

  const clickHandler = (alchol: any) => () => {
    const onRound = () => {
      setRound(alchols.length / 2);
    };
    onRound();
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

  const lastDesc = alcholcupLists[0].description;
  const lastName = alcholcupLists[0].name;
  const lastType = alcholcupLists[0].type;
  const lastAlc = alcholcupLists[0].alc;

  return (
    <>
      <Global />
      {displays.map((v: any) => {
        return (
          <div className="tableWrap" key={v.id}>
            <div className="table__box position-relative" key={v.id} onClick={clickHandler(v)}>
              <div className="table__img">
                <img src={v.img} alt={v.id} />
              </div>
              <p>{v.name}</p>
            </div>
          </div>
        );
      })}
      {!value ? <div className="round">현재 16강 : {round}</div> : null}
      {value ? <AlcholcupDesc lastDesc={lastDesc} lastName={lastName} lastType={lastType} lastAlc={lastAlc} /> : null}
    </>
  );
};

export default AlcholcupCard;
