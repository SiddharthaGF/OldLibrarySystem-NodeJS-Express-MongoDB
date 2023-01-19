const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    bibliographic: { type: String, required: false },
})

module.exports = mongoose.model('Author', AuthorSchema);