import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <h1 className="logo-text">Population Metrics</h1>
    </div>
    <nav className="navigation">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHome} className="home-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
