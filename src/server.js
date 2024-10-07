require('./config/pg_connection')
require('dotenv').config()
const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
app.use(
  cors({
    origin: process.env.WEBCONSOLEURL, // Replace with your Vue.js client's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true // Allow cookies to be sent with requests
  })
)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require("./routes/index")(app);
module.exports = app
