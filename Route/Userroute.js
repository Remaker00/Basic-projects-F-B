const express = require('express');
const router = express.Router();
const userController = require('../controller/Usercontroller');

router.post('/', userController.insertUser)
router.get('/:email' ,userController.getUser);

module.exports = router;