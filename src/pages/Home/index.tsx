import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from '../../layout/MainLayout';
import { loginSuccess } from '../../modules/reducers/login';
import { LoginService } from '../../service/loginService';

const Home = () => {
  const loginService = new LoginService();
  const dispatch = useDispatch();

  useCallback(() => {
    loginService.onAuthChange((user) => {
      console.log('인증정보 변경');
      if (user) {
        dispatch(loginSuccess);
      }
    });
  }, []);

  return <MainLayout child={<></>}></MainLayout>;
};

export default Home;
