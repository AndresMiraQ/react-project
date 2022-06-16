import { useEffect, useState } from 'react';
import axios from 'axios';  // npm install axios
import { getAllNotes } from './services/notes/getAllNotes';
import { createNote } from './services/notes/createNote';
import './App.css';
import { Note } from './components/Note';
   
const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(''); 

  useEffect(() => {
    getAllNotes()
      .then(notes => {
        setNotes(notes);
      });     
  }, []); // empty array means run once on page load
  
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newNoteObject = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    setNotes([...notes, {
      title: newNote,
      body: newNote,
      userId: 1
    }]);

    setNewNote('');
    createNote(newNoteObject)
      .then(response => {
        setNotes([...notes, response]);
      });
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <ol>
        {notes
        .map(note => <Note key={note.id} {...note} />)}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Add</button>
      </form>
    </div>
  );
}
export { App };

