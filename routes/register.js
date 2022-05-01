const express = require('express');
const router = express.Router();
const register = require('../controllers/account');

router.get('/', register.register );
router.post('/', register.registerUser);

module.exports = router;