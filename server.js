
require('dotenv').config()
const express = require('express');
const pool  = require('./handler');
console.log(pool)
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, Express.js Server!');
});
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port,hostname, () => {
    console.log(`Server is running on port ${port}`);
});
