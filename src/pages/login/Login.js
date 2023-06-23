// Login.js

import React from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="image-div">
        <img src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&w=1000&q=80" alt="Image" />
      </div>
      <div className="login-div">
        <h2 className="title">Login</h2>
        <p className="description">
          Welcome to ImageBucket, sign in to continue
        </p>
        <p className="account-message">
          Don't have an account? Create an account, it takes less than a minute.
        </p>
        <form className="form">
          <div className="form-group">
            <input type="text" id="username" className="input" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="password" id="password" className="input" placeholder="Password" />
          </div>
          <Link to="/images">

          <button className="login-button">Sign In</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
