// src/components/InputField.js
import React from 'react';
import './InputField.css';

const InputField = ({ label, type = 'text', placeholder, value, onChange, required = false }) => {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className="custom-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
