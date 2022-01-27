import React from 'react';
import { data } from '../../modules/data';
import LoginButton from './LoginButton/LoginButton';

type Props = {
  handleLogin: () => void;
};

const LoginConponent = ({ handleLogin }: Props) => {
  return (
    <>
      <LoginButton snsType="카카오 로그인" handleLogin={handleLogin} />
      <LoginButton snsType="네이버 로그인" handleLogin={handleLogin} />
      <LoginButton snsType="구글 로그인" handleLogin={handleLogin} />
    </>
  );
};

export default LoginConponent;
