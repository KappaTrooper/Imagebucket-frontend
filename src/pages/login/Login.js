import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

import './Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9001/auth/login', {
        username,
        password,
      });

      const token = response.data.token;

      // Save the token to local storage
      localStorage.setItem('token', token);

      // Set the logged-in state to true
      setLoggedIn(true);
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  if (loggedIn) {
    // Redirect to the images page if the user is logged in
    return <Navigate to="/images" />;
  }

  return (
    <div className="login">
      
      <div className="login-div">
        <h2 className="title">Login</h2>
        <p className="description">Welcome to ImageBucket, sign in to continue</p>
        {error && <p className="error">{error}</p>}
        <form className="form" onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              className="input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-button" type="submit">Sign In</button>
        </form>
        <p className="account-message">
          Don't have an account? Create an account, it takes less than a minute.
        </p>
        <Link to="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
