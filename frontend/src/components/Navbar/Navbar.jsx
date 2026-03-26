import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [mobileMenu, setMobileMenu] = useState(false); // mobile toggle

  return (
    <nav className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />

      {/* Desktop Menu */}
      <ul className={`navbar-menu ${mobileMenu ? 'active' : ''}`}>
        <li onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>
          home
        </li>
        <li onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>
          menu
        </li>
        <li
          onClick={() => setMenu('mobile-app')}
          className={menu === 'mobile-app' ? 'active' : ''}
        >
          mobile app
        </li>
        <li
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          contact
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-cart">
          <img src={assets.basket_icon} alt="Cart" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>

        {/* Hamburger Icon for mobile */}
        <div
          className={`hamburger ${mobileMenu ? 'open' : ''}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;