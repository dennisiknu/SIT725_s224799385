const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const booksRoutes = require('./routes/books.routes');

app.use('/api/books', booksRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Books Home Page!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});