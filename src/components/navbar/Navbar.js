import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Navbar.scss';
import { UserContext, useUser } from '../UserContext/UserProvider'; 
import Logo from '../../assets/Imagebucket.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { username } = useUser(); // Access the username value from the UserContext

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignout = () => {
    // Perform the signout logic here
    // Clear any authentication-related data, tokens, or session

    // Example: Clearing tokens from local storage
    localStorage.removeItem('token');

    // Redirect the user to the desired page after signout
    window.location.href = '/login'; // Example: Redirect to the login page after signout
  };

  console.log('Navbar - Username:', username);

  return (
    <nav>
      <div className="nav__logo">
        <Link className="nav__link" to="/images">
          <img src={Logo} className='nav__logo-image' alt="Logo" />
        </Link>
      </div>
      <div className="nav__openMenu" onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`nav__mainMenu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link className="nav__link" to="/images/user">
            <p className="nav__text">Welcome {username}</p>
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/images">
            <p className="nav__text">Home</p>
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/images/upload">
            <p className="nav__text">Upload</p>
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="#" onClick={handleSignout}>
            <p className="nav__text">Sign out</p>
          </Link>
        </li>
        <div className="nav__closeMenu" onClick={toggleMenu}>
          <FaBars />
        </div>
      </ul>
    </nav>
  );
  
}
