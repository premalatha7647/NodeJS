const express = require('express');
const router = express.Router();
const user = require('../controllers/user')

router.get('/', user.getAllUsers)
router.post('/create', user.createUser)
router.post('/update/:id', user.updateUser)
router.post('/delete/:id', user.deleteUser)


module.exports = router
