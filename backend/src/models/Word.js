const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  word: String,
  meaning: String,
  nextAppearance: Date,
});

module.exports = mongoose.model('Word', WordSchema);
