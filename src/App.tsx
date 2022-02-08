import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Alcholcup from './pages/Alcholcup';
import Login from './pages/Login';
import Recommend from './pages/Recommend';
import Community from './pages/Community';
import { useDispatch } from 'react-redux';
import { checkUserLogin } from './modules/reducers/login';

declare global {
  interface Window {
    Kakao: any;
  }
}

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserLogin());
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
