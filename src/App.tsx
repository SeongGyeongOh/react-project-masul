import React from 'react';
import './App.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Button } from 'antd';
import RecommendPage from './pages/recommend/RecommendPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/login" element={<></>} />
        <Route path="/community" element={<></>} />
        <Route path="/alcoholcup" element={<></>} />
        <Route path="/menu" element={<></>} />
        <Route path="/search" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
