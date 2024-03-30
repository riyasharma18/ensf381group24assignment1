import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
      setErrorMessage('You have successfully logged in!');
      navigate('/products');
    } else {
      setErrorMessage('Unsuccessful login. Please check your username and password.');
    }
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
