import React, { useState } from 'react';
import AgeWarning from './AgeWarning';
import Game from './Game';
import './App.css';

function App() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  const handleConfirm = () => {
    setAgeConfirmed(true);
  };

  return (
    <div className="App">
      {!ageConfirmed ? (
        <AgeWarning onConfirm={handleConfirm} />
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
