import React, { useState } from 'react';
import { getNewExpirationTime, generateId } from '../utils/utilites.jsx';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (text.length > 0) {
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };

      props.addThought(thought);
    }
    const inputField = document.getElementById('input-field');
    inputField.value = '';
  };

  return (
    <form className='AddThoughtForm' onSubmit={handleSubmit}>
      <input
        type='text'
        id='input-field'
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleTextChange}
      />
      <input type='submit' value='Add' />
    </form>
  );
}
