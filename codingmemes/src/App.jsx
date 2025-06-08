import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Login from './pages/access/login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
