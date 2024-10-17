// src/components/FormContainer.js
import React from 'react';
import './FormContainer.css';

const FormContainer = ({ title, children, onSubmit }) => {
  return (
    <div className="form-container">
      <h2 className="form-title">{title}</h2>
      <form onSubmit={onSubmit} className="form-content">
        {children}
      </form>
    </div>
  );
};

export default FormContainer;
