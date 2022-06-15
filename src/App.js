import { useState } from 'react';
import './App.css';
import { Note } from './components/Note';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2020-01-01',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2020-01-02',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2020-01-03',
    important: true,
  }
];
   
//const listContens = notes.map(note => <li key={note.id}>{note.content}</li>);

const App = () => {
  return (
    <div className="App">
      <h1>Notes</h1>
      <ol>
        {notes.map(note => <Note key={note.id} {...note} />)}
      </ol>
    </div>
  );
}

export { App };

