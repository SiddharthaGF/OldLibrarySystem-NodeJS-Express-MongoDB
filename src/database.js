const mongoose = require('mongoose')

const uri = 'mongodb://localhost/OldLibraryDB'

mongoose.connect(uri)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;