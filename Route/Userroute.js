const express = require('express');
const router = express.Router();
const authController= require('../controller/Usercontroller');

router.post('/', authController.insertUser);
router.get('/', authController.getAllUsers);

module.exports = router;