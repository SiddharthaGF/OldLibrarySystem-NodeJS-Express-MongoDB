const express = require('express');
const router = express.Router();

const Loan = require('../models/loan');

router.get('/api/v1/loans', async (req, res) => {
    const loan = await Loan.find();
    res.json(loan);
})

router.post('/api/v1/loan', async (req, res) => {
    const { book_name, loan_date, return_date } = req.body;
    const loan = new Loan({ book_name, loan_date, return_date })
    const result = await loan.save()
    res.json(result)
})

router.put('/api/v1/loan/:id', async (req, res) => {
    const { book_name, loan_date, return_date } = req.body;
    const loan = { book_name, loan_date, return_date };
    const result = await Loan.findByIdAndUpdate(req.params.id, loan);
    res.json(result)
})

module.exports = router;