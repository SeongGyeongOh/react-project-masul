import React from 'react';
import disgust from '../../../assets/icons/disgust.png';
import fear from '../../../assets/icons/fear.png';
import joy from '../../../assets/icons/joy.png';
import sad from '../../../assets/icons/sad.png';
import StepFeeling from './StepFeeling';

const feeling = [
  { id: 1, url: joy, feeling: 'joy', txt: '기뻐요' },
  { id: 2, url: sad, feeling: 'sadness', txt: '우울해요' },
  { id: 3, url: sad, feeling: 'anger', txt: '화가나요' },
  { id: 4, url: disgust, feeling: 'disgust', txt: '좀 짜증나요' },
  { id: 5, url: fear, feeling: 'savory', txt: '외로워요' },
];

const Step3 = () => {
  return (
    <div className="step step3">
      <div className="step_layout step3">
        <div className="step_con">
          <h2>기분이 어떤지 선택해주세요</h2>
          <ul>
            {feeling.map((list) => {
              return <StepFeeling key={list.id} url={list.url} txt={list.txt} id={0} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Step3;