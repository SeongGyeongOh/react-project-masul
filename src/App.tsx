import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Alcholcup from './pages/Alcholcup';
import Login from './pages/Login';
import Recommend from './pages/Recommend';
import Community from './pages/Community';
import Menu from './pages/Menu';
import { LoginService } from './service/loginService';
import { RootState } from './modules/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserLogin } from './modules/reducers/login';

declare global {
  interface Window {
    Kakao: any;
  }
}

const App = () => {
  const dispatch = useDispatch();

  const login = useSelector((state: RootState) => state.login);
  const { isLogin } = login;

  useEffect(() => {
    dispatch(checkUserLogin());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/login" element={<Login />} />
        {isLogin ? (
          <Route path="/community" element={<Community />} />
        ) : (
          <Route path="/community" element={<Navigate to="/login" replace />} />
        )}

        <Route path="/alcoholcup" element={<Alcholcup />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/search" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
