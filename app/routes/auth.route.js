const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

router.post('/signin',authController.signIn);
router.get('/signout',authController.signout);

module.exports = router;
