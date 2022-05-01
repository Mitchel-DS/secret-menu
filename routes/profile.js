const express = require('express');
const router = express.Router();
const profile = require('../controllers/account');

router.get('/', profile.profile );

module.exports = router;