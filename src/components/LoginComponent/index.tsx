import { Button } from 'antd';
import React from 'react';
import { data } from '../../modules/data';
import LoginButton from './LoginButton/LoginButton';

type Props = {
  handleLogin: () => void;
  handleLogout: () => void;
  isLogin: boolean;
};

const LoginConponent = ({ handleLogin, handleLogout, isLogin }: Props) => {
  return (
    <>
      {!isLogin ? (
        <LoginButton snsType="구글 로그인" handleLogin={handleLogin} />
      ) : (
        <button onClick={() => handleLogout()}>로그아웃</button>
      )}
    </>
  );
};

export default LoginConponent;
