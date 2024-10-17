// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ title, subtitle }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      {subtitle && <p className="header-subtitle">{subtitle}</p>}
    </header>
  );
};

export default Header;
