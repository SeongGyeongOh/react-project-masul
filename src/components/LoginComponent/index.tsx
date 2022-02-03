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

  const kakaoLogout = () => {
    if (!window.Kakao.Auth.getAccessToken()) {
      alert('Not logged in.');
      return;
    }
    window.Kakao.Auth.logout(function () {
      alert('logout ok\naccess token -> ' + window.Kakao.Auth.getAccessToken());
    });

    window.Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response: any) {
        console.log(response);
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  };

  return (
    <>
      {!isLogin ? (
        <>
          {/* <LoginButton snsType="카카오 로그인" handleLogin={kakaoLogin} /> */}
          <LoginButton snsType="google" text="구글 로그인" handleLogin={handleLogin} />
        </>
      ) : (
        <button onClick={() => handleLogout()}>로그아웃</button>
      )}
    </>
  );
};

export default LoginComponent;
