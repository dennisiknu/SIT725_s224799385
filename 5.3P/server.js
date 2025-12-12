const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/booksDB');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

const booksRoutes = require('./routes/books.routes');
app.use('/api/books', booksRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Books Catalogue Home Page!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
