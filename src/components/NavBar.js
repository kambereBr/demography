import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css';
import { FaMicrophone, FaLessThan } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
// import { IoIosArrowBack } from 'react-icons/io';

const NavBar = () => (
  <div className="container">
    <nav className="nav-container">
      <div className="back-button-section">
        <span><Link to="/" className="back-button"><FaLessThan /></Link></span>
        <span className="back-button-text">2018</span>
      </div>
      <div className="demography-title-section">
        <h1>Demography</h1>
      </div>
      <div className="right-icons-section">
        <span><FaMicrophone /></span>
        <span><BsFillGearFill /></span>
      </div>
    </nav>
  </div>
);

export default NavBar;
