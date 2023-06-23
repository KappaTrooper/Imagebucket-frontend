// Login.js

import React from 'react';
import { Link } from 'react-router-dom';

import './Signup.scss';

const Signup = () => {
  return (
    <div className="login">
      <div className="image-div">
        <img src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&w=1000&q=80" alt="Image" />
      </div>
      <div className="login-div">
        <h2 className="title">Sign up</h2>
        <p className="description">
          Welcome to ImageBucket 
        </p>
        <p className="account-message">
          Create an account to start posting pictures
        </p>
        <form className="form">
          <div className="form-group">
            <input type="text" id="username" className="input" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="text" id="email" className="input" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" id="password" className="input" placeholder="Password" />
          </div>
          <Link to="/images">

          <button className="login-button">Sign up</button>
          </Link>

          <Link to="/login">

<button className="login-button login-button-login">Already have an account?</button>
</Link>
          
        </form>
      </div>
    </div>
  );
};

export default Signup;
