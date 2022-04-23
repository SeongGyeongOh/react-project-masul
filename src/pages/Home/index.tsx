import React from 'react';
import { HomeContainer } from '../../containers/HomeContainer';
import MainLayout from '../../layout/MainLayout';

const Home = () => {
  // eslint-disable-next-line react/no-children-prop
  return <MainLayout child={<HomeContainer />} />;
};

export default Home;
