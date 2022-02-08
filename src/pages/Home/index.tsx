import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HomeContainer } from '../../containers/HomeContainer';
import MainLayout from '../../layout/MainLayout';
import { loginSuccessAction } from '../../modules/reducers/login';
import { LoginService } from '../../service/loginService';

const Home = () => {
  // eslint-disable-next-line react/no-children-prop
  return <MainLayout child={<HomeContainer />} />;
};

export default Home;
