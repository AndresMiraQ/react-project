import { useEffect, useState } from 'react';
import './App.css';
import { Note } from './components/Note';
   
const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(''); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setNotes(json)
        setLoading(true)});
    }, 2000);
  }, []); // empty array means run once on page load
  
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
      {loading ? '' : <p>Loading...</p>}
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

