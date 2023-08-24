const express = require('express');
const router = express.Router();
const userController = require('../controller/Usercontroller');

router.post('/', userController.insertUser)

module.exports = router;