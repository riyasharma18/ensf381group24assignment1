import './App.css';
import React, { useState } from 'react';
import Homepage from './component/Homepage.js';
import Productpage from './component/Productpage.js';
import Loginpage from './component/Loginpage.js';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Homepage />} />
      <Route path="/login" element={<Loginpage setIsLoggedIn={setIsLoggedIn} />} />
      <Route
          path="/products"
          element={isLoggedIn ? <Productpage /> : <Navigate to="/login" />}
        />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
