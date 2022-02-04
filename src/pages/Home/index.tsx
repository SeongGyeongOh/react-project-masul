import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HomeContainer } from '../../containers/HomeContainer';
import MainLayout from '../../layout/MainLayout';
import { loginSuccessAction } from '../../modules/reducers/login';
import { LoginService } from '../../service/loginService';

const Home = () => {
  return <MainLayout child={<HomeContainer />} />;
};

export default Home;
