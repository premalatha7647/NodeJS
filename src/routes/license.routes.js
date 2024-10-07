const express = require('express')
const router = express.Router()
const license = require('../controllers/license.controller')

module.exports = router

router.post('/', license.getLicensedata)
