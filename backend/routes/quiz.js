const express = require('express');
const Quiz = require('../models/quiz'); // Assuming your model is in the 'models' directory

const router = express.Router();

// Route to fetch all quizzes
router.get('/quizzes', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching quizzes' });
    }
});



// Route to create a new quiz
router.post('/create', async (req, res) => {
    try {
        const { word, meaning } = req.body; // Assuming your request contains 'question' and 'answer'

        const newQuiz = new Quiz({
            word,
            meaning,
        });

        const savedQuiz = await newQuiz.save();
        res.status(201).json(savedQuiz);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;

