const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    tittle: { type: String, required: true },
    author: { type: String, required: false },
    year: { type: Number, required: false },
    editorial: { type: String, required: false },
    pages: { type: Number, required: false },
})

module.exports = mongoose.model('Book', AuthorSchema);