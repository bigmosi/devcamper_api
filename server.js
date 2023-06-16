const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const errorHandler = require('./middleware/error');

// Load env vars
dotenv.config({ path: './config/config.env'});

// Connect to database

connectDB();

// Routes files

const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');


const app = express();

// Body parser

app.use(express.json());

// Dev logging middleware

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(5000, (req, res) => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold.italic);
});
