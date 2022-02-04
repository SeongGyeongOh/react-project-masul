import React from 'react';

const data = [
  {
    id: 1,
    type: '위스키',
    name: '발렌타인(17년)',
    img: 'https://file.mk.co.kr/mkde/N0/2020/03/20200304_4411081_1583307027.jpg',
    price: 100000,
    likeNum: 0,
    alc: 40,
    stress: 5,
    taste: 'clean',
    feeling: 'joy',
    condition: 'present',
    description: '스모키한 훈제향과 매운맛이 강하면서도 목으로 넘어가는느낌이 soft.',
  },
  {
    id: 2,
    type: '위스키',
    name: '발렌타인(17년)',
    img: 'https://file.mk.co.kr/mkde/N0/2020/03/20200304_4411081_1583307027.jpg',
    price: 100000,
    likeNum: 0,
    alc: 20,
    stress: 5,
    taste: 'clean',
    feeling: 'joy',
    condition: 'present',
    description: '스모키한 훈제향과 매운맛이 강하면서도 목으로 넘어가는느낌이 soft.',
  },
  {
    id: 3,
    type: '위스',
    name: '발렌타인(17년)',
    img: 'https://file.mk.co.kr/mkde/N0/2020/03/20200304_4411081_1583307027.jpg',
    price: 100000,
    likeNum: 0,
    alc: 50,
    stress: 5,
    taste: 'clean',
    feeling: 'joy',
    condition: 'present',
    description: '스모키한 훈제향과 매운맛이 강하면서도 목으로 넘어가는느낌이 soft.',
  },
];

// const result1 = data.filter((result) => {
//   return result.condition > 'zalkdjfl';
// if (result.alc > 30) {
//   if (result.type === '위스키') {
//     return true;
//   }
// }
// return false;
// });

// console.log(result1);
// => expected output: Array [2, 3]

const Result = () => {
  return (
    <></>
    // <div key={result1[0].id}>
    //   <h2>결과</h2>
    //   <div>{result1[0].id}</div>
    // </div>
  );
};

export default Result;
