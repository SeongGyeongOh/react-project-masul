import { Button } from 'antd';
import React, { useEffect } from 'react';
import LoginButton from './LoginButton/LoginButton';

type Props = {
  handleLogin: (e: any) => void;
  handleLogout: () => void;
  isLogin: boolean;
};

const LoginComponent = ({ handleLogin, handleLogout, isLogin }: Props) => {
  console.log('로그인 컴포넌트', isLogin);

  return (
    <>
      <LoginButton snsType="kakao" text="카카오 로그인" handleLogin={handleLogin} />
      <LoginButton snsType="naver" text="네이버 로그인" handleLogin={handleLogin} />
      <LoginButton snsType="google" text="구글 로그인" handleLogin={handleLogin} />
    </>
  );
};

export default LoginComponent;
