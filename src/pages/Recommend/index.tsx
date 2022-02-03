import React from 'react';
import RecommendDetails from '../../containers/RecommendDetails';
import MainLayout from '../../layout/MainLayout';
import './recommend.scss';

// layouts
// import { MainLayout } from '../../layout/';

const RecommendPage = () => {
  return (
    <div>
      <MainLayout child={<RecommendDetails />} />
    </div>
  );
};

export default RecommendPage;
