import React from 'react';
import { HomeContainer } from '../../containers/HomeContainer';
import MainLayout from '../../layout/MainLayout';

const Home = () => {
  return <MainLayout child={<HomeContainer />} />;
};

export default Home;
