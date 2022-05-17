const express = require('express');
const router = express.Router();
const reviews = require('../controllers/restaurants');

router.get('/', reviews.reviews );
router.post('/', reviews.postReviews );

module.exports = router;