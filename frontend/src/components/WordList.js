import React, { useState, useEffect } from 'react';
import { getAllWords, createWord, updateWord, deleteWord } from '../api/wordService';


const WordList = ({ words, setWords }) => {
  const [editingId, setEditingId] = useState(null);
  const [updatedWord, setUpdatedWord] = useState({ word: '', meaning: '' });
  const [newWord, setNewWord] = useState({ word: '', meaning: '' });

  useEffect(() => {
    const fetchWords = async () => {
      const words = await getAllWords();
      setWords(words);
    };
    fetchWords();
  }, [setWords]);

  const handleDelete = async (id) => {
    await deleteWord(id);
    setWords(words.filter(word => word._id !== id));
  };

  const handleEdit = (word) => {
    setEditingId(word._id);
    setUpdatedWord({ name: word.name, description: word.description });
  };

  const handleUpdate = async () => {
    await updateWord(editingId, updatedWord);
    setWords(words.map(word => word._id === editingId ? updatedWord : word));
    setEditingId(null);
    setUpdatedWord({ name: '', description: '' });
  };

  const handleCreate = async () => {
    const word = await createWord(newWord);
    // console.log('Created word:', word);
    setWords([...words, word]);
    setNewWord({ word: '', meaning: '' });
  };

  return (
    <div className="container">
      <div className="add-word-form">
        <input
          type="text"
          value={newWord.word}
          onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
          placeholder="New word"
        />
        <input
          type="text"
          value={newWord.meaning}
          onChange={(e) => setNewWord({ ...newWord, meaning: e.target.value })}
          placeholder="New word meaning"
        />
        <button onClick={handleCreate}>Add Word</button>
      </div>


      {words.map((word) => (
        <div key={word._id} className="word-card">
          {editingId === word._id ? (
            <div>
              <input
                type="text"
                value={updatedWord.word}
                onChange={(e) => setUpdatedWord({ ...updatedWord, word: e.target.value })}
              />
              <input
                type="text"
                value={updatedWord.meaning}
                onChange={(e) => setUpdatedWord({ ...updatedWord, meaning: e.target.value })}
              />
              <button onClick={handleUpdate}>Update</button>
            </div>
          ) : (
            <div>
              <p>{word.word}</p>
              <p>{word.meaning}</p>
              <button onClick={() => handleEdit(word)}>Edit</button>
              <button onClick={() => handleDelete(word._id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WordList;
