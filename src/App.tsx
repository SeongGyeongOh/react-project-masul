import React from 'react';
import './App.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Button } from 'antd';
import LoginContainer from './containers/LoginContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginContainer/>} />
        <Route path="/recommend" element={<></>} />
        <Route path="/login" element={<LoginContainer/>} />
        <Route path="/community" element={<></>} />
        <Route path="/alcoholcup" element={<></>} />
        <Route path="/menu" element={<></>} />
        <Route path="/search" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
