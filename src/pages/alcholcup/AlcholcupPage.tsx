import React from 'react';
import AlcholcupDetails from '../../containers/AlcholcupDetails';
import MainLayout from '../../layout/MainLayout';

const AlcholcupPage = () => {
  return <MainLayout child={<AlcholcupDetails />} />;
};

export default AlcholcupPage;
