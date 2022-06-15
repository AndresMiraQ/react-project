import { useState } from 'react';
import './App.css';
import { Note } from './components/Note';
   
const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(''); 
  
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Crear nota');
    setNotes([...notes, {
      id: notes.length + 1,
      title: newNote,
      body: newNote
    }]);
    setNewNote("");
  }

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

