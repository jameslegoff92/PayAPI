const express = require('express');
const priceController = require('../controller/pricing');

const router = express.Router();

router.get('/pricing', priceController.getPriceData)

module.exports = router;