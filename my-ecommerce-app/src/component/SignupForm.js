import React, { useState } from 'react';

const SignupForm = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
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
    
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'username':username, 'password':password, 'email':email }),
      });

      if (response.ok) {
        setErrorMessage('You have successfully signed up!');
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Failed to sign up. Please try again later.');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      setErrorMessage('An error occurred during signup. Please try again later.');
    }
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
