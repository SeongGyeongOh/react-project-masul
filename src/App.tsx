import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Alcholcup from './pages/Alcholcup';
import Login from './pages/Login';
import Recommend from './pages/Recommend';
import Community from './pages/Community';
import Menu from './pages/Menu';
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
  const { isLogin, snsType, nickName } = useSelector((state: RootState) => ({
    isLogin: state.login.isLogin,
    snsType: state.login.snsType,
    nickName: state.login.nickName,
  }));

  useEffect(() => {
    loginService.onAuthChange((user) => {
      if (user) {
        // TODO : 유저 닉네임 가져오기
        dispatch(checkUserLogin('google', '닉네임 안썼다ㅜㅜ'));
      }
    });

    if (window.Kakao.Auth.getAccessToken()) {
      // TODO : 유저 닉네임 가져오기
      dispatch(checkUserLogin('kakao', '닉네임 안썼다ㅜㅜ'));
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
        <Route path="/menu" element={<Menu />} />
        <Route path="/search" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
