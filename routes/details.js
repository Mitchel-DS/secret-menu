const express = require('express');
const router = express.Router();
const details = require('../controllers/restaurants');

router.get('/', details.details );
router.post('/', details.details );

module.exports = router;