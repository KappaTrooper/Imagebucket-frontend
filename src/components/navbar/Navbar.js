import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Navbar.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Link className="navlink"  to="/images">
          <h1>Imagebucket</h1>
        </Link>
      </div>
      <div className="openMenu" onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`mainMenu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link className="navlink" to="/images">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link className="navlink" to="/images/upload">
            <p>Upload</p>
          </Link>
        </li>
        <li>
          <Link className="navlink" to="/">
            <p>Sign out</p>
          </Link>
        </li>
        <div className="closeMenu" onClick={toggleMenu}>
          <FaBars />
        </div>
      </ul>
    </nav>
  );
}
