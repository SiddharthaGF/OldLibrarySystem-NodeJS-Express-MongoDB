const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nick: { type: String, required: true },
    password: { type: String, required: true },
})

module.exports = mongoose.model('User', UserSchema);