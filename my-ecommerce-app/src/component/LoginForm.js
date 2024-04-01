import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ switchToSignup, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    else{
      try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'username':username, 'password':password }),
      });

      if (response.ok) {
        setErrorMessage('');
        setIsLoggedIn(true); 
        navigate('/products');
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Unsuccessful login. Please check your username and password.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('An error occurred during login. Please try again later.');
    }}
  };

  return (
    <div>
      <h1>Login</h1>
      <p style={{ color: 'red' }}>{errorMessage}</p>
      <form onSubmit={handleLogin}>
        <span>Username:<input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /></span>
        <br />
        <span>Password:<input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /></span>
        <br />
        <button type="submit">Login</button>
        <br />
        <button onClick={switchToSignup}>Switch to Signup</button>
      </form>
    </div>
  );
};

export default LoginForm;
