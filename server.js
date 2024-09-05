
require('dotenv').config()
const express = require('express');
const pool  = require('./handler');
const app = express();

app.use(cors({
    origin: 'http://localhost:8080', // Replace with your Vue.js client's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Allow cookies to be sent with requests
}));

app.get('/', (req, res) => {
    res.send('Hello, Express.js Server!');
});
// const hostname = '127.0.0.1';
const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
