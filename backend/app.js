const express = require('express');
const cors = require("cors");
const app = express();
const router = express.Router();

app.use(
    cors({
      origin: "*",
      credentials: true,
    })
);

// database connection
const mongoose = require('mongoose');
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://yujityadav99:bcqENmpKFFMZypwQ@quiz.6kyozj9.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});



app.use(express.json());

const quiz = require("./routes/quiz.js");

app.use("/", quiz);


const server = app.listen(PORT, () => {
    console.log(`Server is working on localhost`);
});

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
});