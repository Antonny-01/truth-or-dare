import React from 'react';
import './AgeWarning.css';

const AgeWarning = ({ onConfirm }) => {
  return (
    <div className="age-warning">
      <div className="warning-content">
        <h1 className="warning-title">18+</h1>
        <p className="warning-text">
          This app contains adult-themed content. You must be 18 or older to proceed.
        </p>
        <button className="confirm-button" onClick={onConfirm}>
          I am 18 or older
        </button>
      </div>
    </div>
  );
};

export default AgeWarning;
