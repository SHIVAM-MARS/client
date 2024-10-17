// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ imageSrc = '#', title, description, alt = 'image' }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={alt} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
