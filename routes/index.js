const express = require('express');
const router = express.Router();

const home = require('./home');
const error = require('./error');
const restaurants = require('./restaurants')
const login = require('./login');
const register = require('./register');
const profile = require('./profile');

router.use('/', home);
router.use('/restaurants', restaurants)
router.use('/login', login)
router.use('/register', register)
router.use('/profile', profile)
router.use('*', error);

module.exports = router;