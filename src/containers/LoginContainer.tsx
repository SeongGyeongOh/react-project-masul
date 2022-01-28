import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LoginConponent from '../components/LoginComponent';
import { RootState } from '../modules/reducers';
import { googleLogin, logout } from '../modules/reducers/login';
import logo_main from '../assets/logo/logo_main.png';

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
  const { isLogin } = useSelector((state: RootState) => ({
    isLogin: state.login.isLogin,
  }));

  console.log('로그인 확인', isLogin);

  const handleLogin = () => {
    dispatch(googleLogin);
  };

  const handleLogout = () => {
    dispatch(logout);
  };

  useEffect(() => {
    // console.log(isLogin);
  });

  return (
    <StyledDiv>
      <LoginConponent handleLogin={handleLogin} handleLogout={handleLogout} isLogin={isLogin} />
    </StyledDiv>
  );
};
