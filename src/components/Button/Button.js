// src/components/Button.js
import React from 'react';
import './Button.css';  // or styled-components

const Button = ({ text, onClick, type = 'button', disabled = false }) => {
  return (
    <button className="custom-btn" onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
