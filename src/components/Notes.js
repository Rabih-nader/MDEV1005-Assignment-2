import React, { useState } from 'react';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes(notes.concat(newNote));
      setNewNote('');
    }
  }

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
        <button onClick={addNote}>Add</button>
      </div>
    </div>
  );
}

export default Notes;
