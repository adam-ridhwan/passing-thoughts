import './App.css';
import React, { useState } from 'react';
import { AddThoughtForm } from './components/addThoughtsForm/addThoughtsForm.jsx';
import { Thought } from './components/thoughts/thought.jsx';
import {
  getNewExpirationTime,
  generateId,
} from './components/utils/utilites.jsx';

const App = () => {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = thought => {
    setThoughts(prev => [thought, ...prev]);
  };

  const removeThought = thoughtIdToRemove => {
    setThoughts(thoughts =>
      thoughts.filter(thought => thought.id !== thoughtIdToRemove)
    );
  };

  return (
    <div className='App'>
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className='thoughts'>
          {thoughts.map(thought => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
