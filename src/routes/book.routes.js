const express = require('express');
const router = express.Router();

const Book = require('../models/book');

router.get('/api/v1/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
})

router.post('/api/v1/book', async (req, res) => {
    const { tittle, author, year, editorial, pages } = req.body;
    const book = new Book({ tittle, author, year, editorial, pages })
    const result = await book.save()
    res.json(result)
})

router.put('/api/v1/book/:id', async (req, res) => {
    const { tittle, author, year, editorial, pages } = req.body;
    const book = { tittle, author, year, editorial, pages };
    const result = await Book.findByIdAndUpdate(req.params.id, book);
    res.json(result)
})

module.exports = router;