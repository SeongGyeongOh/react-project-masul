import React from 'react';
import MultiSteps from './MultiSteps';
import './recommend.scss';

type Props = {
  recommendData: () => void;
  data: any;
};

const index = ({ recommendData, data }: Props) => {
  return (
    <div>
      <MultiSteps recommendData={recommendData} data={data} />
    </div>
  );
};

export default index;
