// src/components/NavigationButtons.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavigationButtons = () => {
  return (
    <div className="navigation-buttons">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/about" className="nav-button">About Us</Link>
    </div>
  );
};

export default NavigationButtons;
