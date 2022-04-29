const express = require('express');
const router = express.Router();

const home = require('./home');
const error = require('./error');
const restaurants = require('./restaurants')

router.use('/', home);
router.use('/restaurants', restaurants)
router.use('*', error);

module.exports = router;