const express = require('express');
const morgan = require('morgan');
const app = express();

const { db_con } = require('./database')

// Settings

app.set('port', process.env.PORT || 3000)

// Middlewares

app.use(morgan('dev'))
app.use(express.json())

// Routes

app.use(require('./routes/author.routes'))
app.use(require('./routes/book.routes'))
app.use(require('./routes/category.routes'))
app.use(require('./routes/loan.routes'))
app.use(require('./routes/user.routes'))

// Static files

// Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
})