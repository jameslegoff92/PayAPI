const express = require('express');
const contactController = require('../controller/contact');

const router = express.Router();

router.get('/contact', contactController.getContact);

module.exports = router;