import React from 'react';
import styled from 'styled-components';
import RecommendDetails from '../../containers/RecommendDetails';
import MainLayout from '../../layout/MainLayout';

// layouts
// import { MainLayout } from '../../layout/';

const RecommendPage = () => {
  const StyledLayout = styled.div`
    height: 100vh;
    width: 100%;
  `;
  return (
    <div>
      <StyledLayout>
        {/* <MainLayout child={} /> */}
        <RecommendDetails />
      </StyledLayout>
    </div>
  );
};

export default RecommendPage;
