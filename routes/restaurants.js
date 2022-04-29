const express = require('express');
const router = express.Router();
const restaurants = require('../controllers/restaurants');

router.get('/', restaurants.restaurants );

module.exports = router;