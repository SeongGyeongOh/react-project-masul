import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Alcholcup } from './pages';
import Login from './pages/Login';
import RecommendPage from './pages/Recommend';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<></>} />
        <Route path="/alcoholcup" element={<Alcholcup />} />
        <Route path="/menu" element={<></>} />
        <Route path="/search" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
