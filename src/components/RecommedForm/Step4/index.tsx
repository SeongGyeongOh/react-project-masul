import React from 'react';
import { Slider } from 'antd';

const marks = {
  0: '0',
  25: '25',
  50: '50',
  75: '75',
  100: '100',
};

const Step4 = () => {
  return (
    <div className="step step4">
      <div className="step_layout step4">
        <div className="step_con">
          <h2>얼마나 취하고 싶으세요?</h2>
          <div className="slider_wrap">
            <Slider vertical marks={marks} defaultValue={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
