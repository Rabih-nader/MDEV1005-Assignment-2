import React from 'react';
import Notes from '../components/Notes';
import Counter from '../components/Counter';
import CharacterCounter from '../components/CharacterCounter';
import Checklist from '../components/Checklist';

function Tools() {
  return (
    <div>
      <h1>Tools Page</h1>
      <p>Welcome to Tools</p>
      <Counter />
      <CharacterCounter />
      <Notes />
      <Checklist />
    </div>
  );
}

export default Tools;
