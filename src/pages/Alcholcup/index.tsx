import React from 'react';
import { AlcholcupDetails } from '../../containers/AlcholcupDetails';
import MainLayout from '../../layout/MainLayout';

export const Alcholcup = () => {
  return <MainLayout child={<AlcholcupDetails />} />;
};
