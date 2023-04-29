import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Words = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchWords = async () => {
      const res = await axios.get('/api/words');
      setWords(res.data);
    };

    fetchWords();
  }, []);

  return (
    <div>
      {words.map(word => (
        <div key={word._id}>
          <h1>{word.word}</h1>
          <p>{word.meaning}</p>
        </div>
      ))}
    </div>
  );
};

export default Words;
