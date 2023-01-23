const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Author = require("../models/author");

router.get('/api/v1/users', async (req, res) => {
    const user = await User.find();
    res.json(user);
})
router.get('/api/v1/user', async (req, res) => {
    const { nick, password } = req.body;
    const result = await User.exists({nick: nick, password:password });
    res.json(result);
})


router.post('/api/v1/user', async (req, res) => {
    const { nick, password } = req.body;
    const user = new User({  nick, password  })
    const result = await user.save()
    res.json([result])
})

router.get('/api/v1/user/:id', async (req, res) => {
    const user = await User.find({_id: req.params.id});
    res.json([user]);
})

router.put('/api/v1/user/:id', async (req, res) => {
    const { nick, password  } = req.body;
    const user = { nick, password  };
    const result = await User.findByIdAndUpdate(req.params.id, user);
    res.json(result)
})

router.delete('/api/v1/user/:id', async (req, res) => {
    const result = await User.deleteOne({_id: req.params.id});
    res.json(result) 
})

module.exports = router;