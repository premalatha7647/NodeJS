require('dotenv').config()

const { Pool } = require('pg')
const dbConfig = require('./db')
const pool = new Pool(dbConfig)
module.exports = pool
