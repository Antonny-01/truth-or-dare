import React, { useState } from 'react';
import { truths, dares } from './data';
import './Game.css';

const Game = () => {
  const [currentItem, setCurrentItem] = useState('');
  const [type, setType] = useState('');

  const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const handleTruth = () => {
    const truth = getRandomItem(truths);
    setCurrentItem(truth);
    setType('Truth');
  };

  const handleDare = () => {
    const dare = getRandomItem(dares);
    setCurrentItem(dare);
    setType('Dare');
  };

  return (
    <div className="game">
      <h1 className="game-title">Truth or Dare 18+</h1>
      <div className="buttons">
        <button className="truth-button" onClick={handleTruth}>Truth</button>
        <button className="dare-button" onClick={handleDare}>Dare</button>
      </div>
      {currentItem && (
        <div className="item-display">
          <h2 className="item-type">{type}</h2>
          <p className="item-text">{currentItem}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
