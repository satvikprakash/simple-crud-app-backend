const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const PORT = process.env.PORT || 8000;
const URL = process.env.connectionURL;

const app = express();

// Middlewares to get request body content
app.use(express.urlencoded({ extended: true }));

// Middleware to take in JSON and Form data
app.use(express.json());



// Connection to DataBase
mongoose.connect(URL)
.then(() => {
    console.log('MongoDB connected!');
    app.listen(PORT, () => console.log(`Server started at port ${PORT}!`));
})
.catch(err => console.error("MongoDB connection error:", err));


app.route('/').get((req, res) => {
    res.send('Hello from Node API!');
})


// All Routesavailable directed to product.route.js
app.use('/api/products', productRoute);