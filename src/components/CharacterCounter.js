import React, { useState } from 'react';

const CharacterCounter = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const characterCount = inputValue.length;

  return (
    <div>
      <h1>Character Counter</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Character Count: {characterCount}</p>
    </div>
  );
};

export default CharacterCounter;
