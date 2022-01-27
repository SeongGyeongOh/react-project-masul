import React from 'react';
import LoginButton from './LoginButton/LoginButton';
// import logo from '../../assets/logo/logo.png';
const LoginConponent = () => {
  return (
    <>
      <LoginButton snsType="카카오 로그인" />
      <LoginButton snsType="네이버 로그인" />
      <LoginButton snsType="구글 로그인" />
      {/* <img src={logo} alt="엑박" /> */}
    </>
  );
};

export default LoginConponent;
