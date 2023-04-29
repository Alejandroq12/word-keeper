import React, { useState } from 'react';
import { createWord } from '../api/wordService';

const WordForm = ({ onWordAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const wordData = {
      name,
      description
    };
    await createWord(wordData);
    setName('');
    setDescription('');
    onWordAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Word:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Word</button>
    </form>
  );
};

export default WordForm;
