const Word = require('../models/Word');

exports.getWords = async (req, res) => {
  const words = await Word.find();
  res.json(words);
};

exports.createWord = async (req, res) => {
  const { word, meaning } = req.body;
  const newWord = new Word({ word, meaning });
  await newWord.save();
  res.json(newWord);
};


exports.updateWord = async (req, res) => {
  const word = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(word);
};

exports.deleteWord = async (req, res) => {
  const word = await Word.findByIdAndRemove(req.params.id);
  res.json(word);
};
