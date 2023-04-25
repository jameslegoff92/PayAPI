const express = require('express');
const aboutController = require('../controller/about');

const router = express.Router();

router.get('/about', aboutController.getAbout);


module.exports = router;