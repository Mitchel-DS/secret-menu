const express = require('express');
const router = express.Router();

const home = require('./home');
const error = require('./error');
const restaurants = require('./restaurants');
const login = require('./login');
const register = require('./register');
const profile = require('./profile');
const details = require('./details');

router.use('/', home);
router.use('/restaurants', restaurants);
router.use('/login', login);
router.use('/register', register);
router.use('/profile', profile);
router.use('/details', details);
router.use('*', error);

module.exports = router;