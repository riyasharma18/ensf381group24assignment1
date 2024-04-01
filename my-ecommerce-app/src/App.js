import './App.css';
import React, { useState } from 'react';
import Homepage from './component/Homepage.js';
import Productpage from './component/Productpage.js';
import Loginpage from './component/LoginPage.js';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkLoggedIn = () => {
    return isLoggedIn;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {Loginpage}
        <Route path="/login" element={<Loginpage setIsLoggedIn={setIsLoggedIn} />} />
        {Productpage}
        <Route
          path="/products"
          element={checkLoggedIn() ? <Productpage /> : <Navigate to="/login" />}
        />
        {Loginpage}
        <Route
          path="/*"
          element={checkLoggedIn() ? <Navigate to="/products" /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;