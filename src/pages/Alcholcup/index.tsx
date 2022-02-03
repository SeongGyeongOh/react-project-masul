import React from 'react';
import { AlcholcupContainers } from '../../containers/AlcholcupContainers';
import MainLayout from '../../layout/MainLayout';

const Alcholcup = () => {
  return <MainLayout child={<AlcholcupContainers />} />;
};

export default Alcholcup;
