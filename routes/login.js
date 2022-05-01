const express = require('express');
const router = express.Router();
const login = require('../controllers/account');

router.get('/', login.login );
router.post('/', login.loginUser);

module.exports = router;