import './App.css';
import React from 'react';
import Homepage from './component/Homepage.js';
import Productpage from './component/Productpage.js';
import LoginPage from './component/LoginPage.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Homepage />} />
      <Route path = '/Login' element={<LoginPage />} />
      <Route path = '/Products' element={<Productpage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
