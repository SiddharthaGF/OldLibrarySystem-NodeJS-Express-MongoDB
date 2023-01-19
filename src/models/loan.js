const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    book_name: { type: String, required: true },
    loan_date: { type: Date, required: true },
    return_date: { type: Date, required: false },
})

module.exports = mongoose.model('Load', AuthorSchema);