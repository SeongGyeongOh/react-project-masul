import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecommendPage from './pages/recommend/RecommendPage';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<></>} />
        <Route path="/alcoholcup" element={<></>} />
        <Route path="/menu" element={<></>} />
        <Route path="/search" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
