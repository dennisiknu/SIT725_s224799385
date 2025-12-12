const booksService = require('../services/books.service');

exports.getAllBooks = (req, res) => {
    const items = booksService.getAllBooks();

    res.json({
        status: 200,
        data: items,
        message: 'Books retrieved using service'
    });
};

exports.getBookById = (req, res) => {
    const id = req.params.id;

    const book = booksService.getBookById(id);

    if (!book) {
        return res.status(404).json({
            status: 404,
            message: 'Book not found'
        });
    }

    res.json({
        status: 200,
        data: book,
        message: 'Book retrieved using service'
    });
};
