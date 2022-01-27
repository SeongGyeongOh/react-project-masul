import React from 'react';
import CommunityContainer from '../../containers/CommunityContainer';
import MainLayout from '../../layout/MainLayout';

const Community = () => {
  return (
    <div>
      <MainLayout child={<CommunityContainer />} />
    </div>
  );
};

export default Community;
