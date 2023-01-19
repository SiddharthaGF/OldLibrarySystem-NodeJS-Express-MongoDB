const express = require('express');
const router = express.Router();

const Author = require('../models/author');

router.get('/api/v1/authors', async (req, res) => {
    const authors = await Author.find();
    res.json(authors);
})

router.post('/api/v1/author', async (req, res) => {
    const { name, lastname, bibliographic } = req.body;
    const author = new Author({name, lastname, bibliographic})
    const result = await author.save()
    res.json(result)
})

router.put('/api/v1/author/:id', async (req, res) => {
    const { name, lastname, bibliographic } = req.body;
    const author = {name, lastname, bibliographic};
    const result = await Author.findByIdAndUpdate(req.params.id, author);
    res.json(result)
})

module.exports = router;