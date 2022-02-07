import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Alcholcup from './pages/Alcholcup';
import Login from './pages/Login';
import Recommend from './pages/Recommend';
import Community from './pages/Community';
import { useDispatch, useSelector } from 'react-redux';
import { LoginService } from './service/loginService';
import { checkUserLogin, loginSuccessAction } from './modules/reducers/login';
import { RootState } from './modules/reducers';

declare global {
  interface Window {
    Kakao: any;
  }
}

const App = () => {
  const loginService = new LoginService();
  const dispatch = useDispatch();
  const { isLogin, snsType } = useSelector((state: RootState) => ({
    isLogin: state.login.isLogin,
    snsType: state.login.snsType,
    // nickName: state.login.nickName,
  }));

  useEffect(() => {
    loginService.onAuthChange((user) => {
      if (user) {
        // 이메일로 유저 특정
        // TODO : 유저 닉네임 가져오기
        // console.log(user.email);
        // console.log(user.getIdToken());
        console.log('사용자 정보', user);
        // dispatch(checkUserLogin('google', nickname || '닉네임 안썼다'));
      }
    });

    if (window.Kakao.Auth.getAccessToken()) {
      let nickname = '';
      window.Kakao.API.request({
        url: '/v2/user/me',
        data: {
          property_keys: ['properties.nickname'],
        },
        success: (response: any) => {
          nickname = response.properties.nickname;
          dispatch(checkUserLogin('kakao', nickname || '닉네임 안썼다'));
          // console.log(response.properties.nickname);
        },
        fail: (error: any) => {
          console.log(error);
        },
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<Community />} />
        <Route path="/alcoholcup" element={<Alcholcup />} />
        <Route path="/menu" element={<></>} />
        <Route path="/search" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
