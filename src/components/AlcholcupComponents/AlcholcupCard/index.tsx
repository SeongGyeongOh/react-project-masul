import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { Image } from 'antd';
import { Global } from '../styled';
// import { HeartTwoTone } from '@ant-design/icons';
// import LikeButton from '../LikeButton';
import AlcholcupDesc from '../AlcholcupDesc';

const AlcholcupCard = ({ alcholcup }: any) => {
  const { alcholcupLists } = useSelector((state: any) => state.alcholcup);
  // console.log('alcholcupLists : ', alcholcupLists);

  const [alchols, setAlchols]: any = useState([]);
  const [displays, setDisplays]: any = useState([]);
  const [winners, setWinners]: any = useState([]);
  // const [likes, setLikes]: any = useState();
  const [value, setValue]: any = useState(false);
  const [round, setRound]: any = useState(alcholcupLists.length);

  useEffect(() => {
    setAlchols(alcholcupLists);
    setDisplays([alcholcupLists[0], alcholcupLists[1]]);
    console.log('useEffect', alcholcupLists);

    // setLikes([alcholcupLists[0].likeNum, alcholcupLists[1].likeNum]);
    // console.log('setLikes', setLikes([alcholcupLists[0].likeNum, alcholcupLists[1].likeNum]));
  }, []);

  console.log('display : ', displays);
  console.log(alcholcupLists[0].likeNum);
  console.log(alcholcupLists.length / 2);

  const onDescription = useCallback(() => {
    setValue(true);
  }, []);

  const onRound = () => {
    // setRound(...round, round / 2);
  };

  const clickHandler = (alchol: any) => () => {
    const onRound = () => {
      setRound(alchols.length / 2);
    };
    onRound();
    if (alchols.length <= 2) {
      if (winners.length === 0) {
        setDisplays([alchol]);
        // const likeNumber = winners.likeNum + 1;
        // setLikes([likeNumber]);
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

  const lastDesc = alcholcupLists[0].description;
  const lastName = alcholcupLists[0].name;
  const lastType = alcholcupLists[0].type;
  const lastAlc = alcholcupLists[0].alc;

  // const addLikes = () => {
  //   const likeNumber = winners.likeNum + 1;
  //   setLikes([...likeNumber, likeNumber + 1]);
  // };

  // const [colors, setColors] = useState('#95f004');
  // const onChangeColor = useCallback(() => {
  //   setColors('red');
  // }, []);

  // const likeNum = useSelector((state: any) => state.alcholcup.likeNum);
  // const onLike = useCallback(() => {
  //   if (!id) {
  //     return alert('로그인이 필요합니다.');
  //   }
  //   return dispatch({
  //     type: LIKE_POST_REQUEST,
  //     data: post.id,
  //   });
  // }, [id]);

  return (
    <>
      <Global />
      {displays.map((v: any) => {
        return (
          <div className="tableWrap" key={v.id}>
            <div className="table__box position-relative" key={v.id} onClick={clickHandler(v)}>
              <div className="table__img">
                <img src={v.img} alt={v.id} />
                {/* <Image src={v.img} alt={v.name} /> */}
                {/* <span>{winners.length === 0 && <HeartTwoTone twoToneColor={colors} />}</span> */}
              </div>
              <p>{v.name}</p>
            </div>
          </div>
        );
      })}
      {!value ? <div className="round">현재 16강 : {round}</div> : null}
      {value ? <AlcholcupDesc lastDesc={lastDesc} lastName={lastName} lastType={lastType} lastAlc={lastAlc} /> : null}
      {/* {value ? <div>{alcholcupLists[0].description}</div> : null} */}
      {/* {likes ? <LikeButton onClick={addLikes} /> : null} */}
      {/* <LikeButton onClick={addLikes} /> */}
    </>
  );
};

export default AlcholcupCard;
