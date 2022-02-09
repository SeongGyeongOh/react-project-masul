import React from 'react';
import { useEffect } from 'react';
import MultiSteps from './MultiSteps';
import './recommend.scss';

type Props = {
  data: any;
};

const index = () => {

  return (
    <div>
      <MultiSteps />
    </div>
  );
};

export default index;
