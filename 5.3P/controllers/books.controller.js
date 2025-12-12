const booksService = require('../services/books.service');

exports.getAllBooks = async (req, res) => {
    const items = await booksService.getAllBooks();
    res.json({
        status: 200,
        data: items,
        message: 'Books retrieved using service'
    });
};

exports.getBookById = async (req, res) => {
    const id = req.params.id;
    const book = await booksService.getBookById(id);

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
