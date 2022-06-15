import { useState } from 'react';
import './App.css';
import { Note } from './components/Note';
   
const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState(''); 
  const [showAll, setShowAll] = useState(true);
  
  const handleChange = (event) => {
    setNewNote(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Crear nota');
    setNotes([...notes, {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toDateString(),
      important: Math.random() > 0.5
    }]);
    setNewNote("");
  }
  
  const handleShowAll = () => {
    setShowAll(() => !showAll);
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{ showAll ? 'Show only important' : 'Show all'}</button>
      <ol>
        {notes
        .filter(note => showAll || note.important)
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

