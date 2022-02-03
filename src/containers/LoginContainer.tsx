import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LoginComponent from '../components/LoginComponent';
import { RootState } from '../modules/reducers';
import {
  googleLogin,
  logout,
  loginStateChanged,
  loginSuccess,
  logoutSuccess,
  kakaoLogin,
} from '../modules/reducers/login';
import logo_main from '../assets/logo/logo_main.png';
import { LoginService } from '../service/loginService';
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${logo_main});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #33434d;
  display: flex;
  padding-top: 15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const loginService = new LoginService();
  const navigate = useNavigate();

  const { isLogin } = useSelector((state: RootState) => ({
    isLogin: state.login.isLogin,
  }));

  console.log('로그인 컨테이너', isLogin);
  const handleLogin = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (e.currentTarget.id === 'google') {
      dispatch(googleLogin);
    }

    if (e.currentTarget.id === 'kakao') {
      dispatch(kakaoLogin);
    }

    // navigate('/');
  };

  const handleLogout = () => {
    dispatch(logout);
  };

  // const kakaoLogin = () => {
  //   window.Kakao.Auth.login({
  //     success: (response: any) => {
  //       window.Kakao.API.request({
  //         url: '/v2/user/me',
  //         success: (res: any) => {
  //           console.log('사용자 정보', res);
  //         },
  //       });
  //     },
  //     fail: (err: any) => {
  //       // console.log(err);
  //       alert(JSON.stringify(err));
  //     },
  //   });
  // };

  useEffect(() => {}, []);

  return (
    <StyledDiv>
      <LoginComponent handleLogin={handleLogin} handleLogout={handleLogout} isLogin={isLogin} />
    </StyledDiv>
  );
};
