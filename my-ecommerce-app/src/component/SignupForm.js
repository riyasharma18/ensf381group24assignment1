import React, { useState } from 'react';

const SignupForm = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (
      username.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === '' ||
      email.trim() === ''
    ) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isUsernameTaken = users.some(user => user.username === username);
    if (isUsernameTaken) {
      setErrorMessage('Username is already taken. Please choose a different one.');
      return;
    }

    const newUser = { username, password, email };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setErrorMessage("You have successfully signed up!");
  };

  return (
    <div>
      <h1>Signup</h1>
      <p style={{ color: 'red' }}>{errorMessage}</p>
      <form onSubmit={handleSignup}>
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
        <span>Confirm Password:<input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /></span>
        <br />
        <span>Email:<input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /></span>
        <br />
        <button type="submit">Signup</button>
        <br />
        <button onClick={switchToLogin}>Switch to Login</button>
      </form>
    </div>
  );
};

export default SignupForm;
