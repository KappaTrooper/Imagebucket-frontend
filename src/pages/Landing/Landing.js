// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.scss';

const Landing = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="title">Imagebucket</h1>
        <p className="subtitle">Store and share your images</p>
      </header>
      <main className="content">
        <p className="description">
          Welcome to Imagebucket! Upload your images and share them with others. 
          It's fast, secure, and easy to use.
        </p>
        <div className="buttons">
          <button className="cta-button">Get Started</button>
          <div className="auth-buttons">
          <Link to="/login">
            <button className="auth-button">Login</button>
            </Link>

            <Link to="/signup">
            <button className="auth-button">Sign Up</button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Imagebucket. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
