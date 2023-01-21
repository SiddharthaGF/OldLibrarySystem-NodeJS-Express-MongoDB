const express = require('express');
const router = express.Router();

const Category = require('../models/category');

router.get('/api/v1/categories', async (req, res) => {
    const category = await Category.find();
    res.json(category);
})

router.get('/api/v1/category/:id', async (req, res) => {
    const category = await Category.find({_id: req.params.id});
    res.json([category]);
})

router.post('/api/v1/category', async (req, res) => {
    const { name, description } = req.body;
    const category = new Category({  name, description  })
    const result = await category.save()
    res.json([result])
})

router.put('/api/v1/category/:id', async (req, res) => {
    const { name, description  } = req.body;
    const category = { name, description  };
    const result = await Category.findByIdAndUpdate(req.params.id, category);
    res.json(result)
})

router.delete('/api/v1/category/:id', async (req, res) => {
    const result = await Category.deleteOne({_id: req.params.id});
    res.json(result) 
})

module.exports = router;