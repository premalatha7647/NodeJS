require('./config/pg_connection')
const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const routes = require("./routes/user.routes")

app.use(
  cors({
    origin: 'http://localhost:5173', // Replace with your Vue.js client's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true // Allow cookies to be sent with requests
  })
)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/user',routes)

module.exports = app
