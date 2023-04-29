import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WordList from './components/WordList';
import WordForm from './components/WordForm';
import './App.css';

function App() {
  const [words, setWords] = useState([]);
  
  const handleWordAdded = () => {
    setWords(prevWords => [...prevWords]);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WordList words={words} setWords={setWords} />} />
          <Route path="/add" element={<WordForm onWordAdded={handleWordAdded} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
