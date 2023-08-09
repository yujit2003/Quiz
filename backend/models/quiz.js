const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    word: String,
    meaning: String,
});

const Quiz = mongoose.model('question', quizSchema);

module.exports = Quiz;
