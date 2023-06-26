import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

import './Signup.scss';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:9001/auth/signup', {
        username,
        password,
      });

      setRegistered(true);
    } catch (error) {
      setError('Failed to register user');
    }
  };

  if (registered) {
    // Redirect to the login page if the user is registered successfully
    return <Navigate to="/login" />;
  }

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2 className="signup-title">Sign up</h2>
        <p className="signup-description">Welcome to ImageBucket</p>
        {error && <p className="signup-error">{error}</p>}
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="signup-form-group">
            <input
              type="text"
              id="username"
              className="signup-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="signup-form-group">
            <input
              type="password"
              id="password"
              className="signup-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign up
          </button>
          <Link to="/login">
            <button className="signup-login-button">Already have an account?</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
